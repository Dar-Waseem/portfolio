"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

export function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github?username=facebook&type=repos");
        const data = await response.json();
        setRepos(data.repos || []);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const cardGradients = [
    "from-blue-500/10 via-cyan-500/5 to-teal-500/10",
    "from-violet-500/10 via-purple-500/5 to-fuchsia-500/10",
    "from-emerald-500/10 via-green-500/5 to-teal-500/10",
    "from-orange-500/10 via-amber-500/5 to-yellow-500/10",
    "from-pink-500/10 via-rose-500/5 to-red-500/10",
    "from-indigo-500/10 via-blue-500/5 to-violet-500/10",
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with care and
            attention to detail.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse border-0 bg-gradient-to-br from-muted/50 to-muted/30">
                <CardContent className="p-6 h-48" />
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col border-0 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold line-clamp-1 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                        {repo.name}
                      </h3>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-purple-500 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.language && (
                        <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 border-0">
                          {repo.language}
                        </Badge>
                      )}
                      {repo.topics?.slice(0, 2).map((topic) => (
                        <Badge key={topic} variant="outline" className="border-purple-500/30">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1 text-amber-600">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 text-blue-600">
                        <GitFork className="h-4 w-4" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
