import { NextResponse } from "next/server";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
}

interface GitHubUser {
  login: string;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "facebook";
  const type = searchParams.get("type") || "repos";

  try {
    let data: GitHubRepo[] | GitHubUser;
    let response: Response;

    if (type === "user") {
      response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      });
    } else {
      response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=stars&per_page=10`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
          next: { revalidate: 3600 },
        }
      );
    }

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }
      if (response.status === 403) {
        return NextResponse.json(
          { error: "API rate limit exceeded. Please try again later." },
          { status: 403 }
        );
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    data = await response.json();

    if (type === "repos" && Array.isArray(data)) {
      const filteredRepos = data
        .filter((repo) => !repo.fork)
        .slice(0, 6)
        .map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language,
          topics: repo.topics || [],
          updated_at: repo.updated_at,
        }));

      return NextResponse.json({ repos: filteredRepos }, { status: 200 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
