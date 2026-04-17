"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Eye, MessageSquare, Database, Star, GitFork, Activity, Server, RefreshCw, Code2, BarChart3, Zap } from "lucide-react";
import { SkillsProgress } from "@/components/animated-progress";

interface Submission {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface Stats {
  visitors: number;
  pageViews: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface GitHubUser {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Activity {
  id: string;
  type: "visit" | "message" | "github";
  description: string;
  timestamp: string;
}

export default function Dashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState<Stats>({ visitors: 0, pageViews: 0 });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchData = async () => {
    try {
      setLoading(true);
      const [subRes, statsRes, reposRes, userRes] = await Promise.all([
        fetch("/api/contact"),
        fetch("/api/stats"),
        fetch("/api/github?username=facebook&type=repos"),
        fetch("/api/github?username=facebook&type=user"),
      ]);

      const [subData, statsData, reposData, userData] = await Promise.all([
        subRes.json(),
        statsRes.json(),
        reposRes.json(),
        userRes.json(),
      ]);

      setSubmissions(subData.submissions || []);
      setStats(statsData);
      setRepos(reposData.repos?.slice(0, 5) || []);
      setUser(userData);

      // Generate activity log
      const acts: Activity[] = [];
      subData.submissions?.forEach((s: Submission) => {
        acts.push({
          id: `msg-${s.id}`,
          type: "message",
          description: `New message from ${s.name}`,
          timestamp: s.created_at,
        });
      });
      acts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      setActivities(acts.slice(0, 10));

      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <RefreshCw className="h-5 w-5 animate-spin" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/50 p-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
            <Button
              size="sm"
              onClick={fetchData}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-cyan-500/10 backdrop-blur-sm shadow-lg shadow-blue-500/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Visitors</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{stats.visitors.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-teal-500/10 backdrop-blur-sm shadow-lg shadow-emerald-500/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Page Views</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">{stats.pageViews.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-violet-500/10 via-violet-400/5 to-fuchsia-500/10 backdrop-blur-sm shadow-lg shadow-violet-500/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Messages</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">{submissions.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-orange-500/10 via-orange-400/5 to-amber-500/10 backdrop-blur-sm shadow-lg shadow-orange-500/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">GitHub Stars</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">{totalStars.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="messages" className="mb-8">
          <TabsList className="grid grid-cols-5 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 p-1 rounded-xl">
            <TabsTrigger value="messages" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-lg transition-all">
              Messages
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-lg transition-all">
              Skills
            </TabsTrigger>
            <TabsTrigger value="github" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-lg transition-all">
              GitHub
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-lg transition-all">
              Activity
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-lg transition-all">
              System
            </TabsTrigger>
          </TabsList>

          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10 backdrop-blur-sm shadow-lg shadow-yellow-500/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    Frontend Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillsProgress
                    skills={[
                      { name: "JavaScript", level: 92, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
                      { name: "TypeScript", level: 88, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
                      { name: "React", level: 90, color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
                      { name: "Next.js", level: 85, color: "bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white" },
                      { name: "Tailwind CSS", level: 87, color: "bg-gradient-to-r from-teal-500 to-cyan-500" },
                    ]}
                  />
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 backdrop-blur-sm shadow-lg shadow-green-500/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-teal-500">
                      <Server className="h-5 w-5 text-white" />
                    </div>
                    Backend Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillsProgress
                    skills={[
                      { name: "Node.js", level: 85, color: "bg-gradient-to-r from-green-500 to-emerald-600" },
                      { name: "Python", level: 78, color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
                      { name: "PostgreSQL", level: 82, color: "bg-gradient-to-r from-indigo-500 to-purple-500" },
                      { name: "MongoDB", level: 75, color: "bg-gradient-to-r from-green-600 to-emerald-500" },
                      { name: "GraphQL", level: 70, color: "bg-gradient-to-r from-pink-500 to-rose-500" },
                    ]}
                  />
                </CardContent>
              </Card>

              <Card className="md:col-span-2 border-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 backdrop-blur-sm shadow-lg shadow-violet-500/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    Overall Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-muted/50"
                        />
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="url(#gradient1)"
                          strokeWidth="8"
                          fill="transparent"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 351" }}
                          animate={{ strokeDasharray: "281 351" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">80%</span>
                      </div>
                    </div>
                    <p className="font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Full Stack</p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <defs>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-muted/50"
                        />
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="url(#gradient2)"
                          strokeWidth="8"
                          fill="transparent"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 351" }}
                          animate={{ strokeDasharray: "316 351" }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">90%</span>
                      </div>
                    </div>
                    <p className="font-medium bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">UI/UX Design</p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <defs>
                          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#14b8a6" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-muted/50"
                        />
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="url(#gradient3)"
                          strokeWidth="8"
                          fill="transparent"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 351" }}
                          animate={{ strokeDasharray: "263 351" }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">75%</span>
                      </div>
                    </div>
                    <p className="font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">DevOps</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="border-0 bg-gradient-to-br from-slate-500/10 via-slate-400/5 to-zinc-500/10 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-slate-500 to-zinc-500">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  Contact Submissions ({submissions.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submissions.length === 0 ? (
                  <p className="text-muted-foreground">No submissions yet</p>
                ) : (
                  <div className="space-y-4">
                    {submissions.map((sub) => (
                      <div key={sub.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{sub.name}</p>
                            <p className="text-sm text-muted-foreground">{sub.email}</p>
                          </div>
                          <Badge variant="outline">
                            {new Date(sub.created_at).toLocaleString()}
                          </Badge>
                        </div>
                        <p className="text-sm">{sub.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="github">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-gray-800/10 via-gray-700/5 to-slate-800/10 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-slate-700 dark:from-gray-300 dark:to-slate-300 bg-clip-text text-transparent">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-gray-700 to-slate-700 dark:from-gray-600 dark:to-slate-600">
                      <Code2 className="h-5 w-5 text-white" />
                    </div>
                    GitHub Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {user ? (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Username</span>
                        <span className="font-medium">{user.login}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Public Repos</span>
                        <span className="font-medium">{user.public_repos}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Followers</span>
                        <span className="font-medium">{user.followers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Following</span>
                        <span className="font-medium">{user.following}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No data</p>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-orange-500/10 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    Top Repositories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {repos.map((repo) => (
                      <div key={repo.id} className="flex items-center justify-between">
                        <span className="font-medium">{repo.name}</span>
                        <div className="flex gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="h-3 w-3" /> {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <Card className="border-0 bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-blue-500/10 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activities.length === 0 ? (
                  <p className="text-muted-foreground">No recent activity</p>
                ) : (
                  <div className="space-y-3">
                    {activities.map((act) => (
                      <div key={act.id} className="flex items-center gap-4 p-3 border rounded-lg bg-gradient-to-r from-background to-muted/30">
                        <div className={`p-2 rounded-lg ${
                          act.type === "message"
                            ? "bg-gradient-to-br from-violet-500 to-fuchsia-500"
                            : "bg-gradient-to-br from-blue-500 to-cyan-500"
                        }`}>
                          {act.type === "message" ? (
                            <MessageSquare className="h-4 w-4 text-white" />
                          ) : (
                            <Users className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{act.description}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(act.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card className="border-0 bg-gradient-to-br from-rose-500/10 via-red-500/5 to-orange-500/10 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500">
                    <Server className="h-5 w-5 text-white" />
                  </div>
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse" />
                      <span className="font-medium">Database</span>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
                      <span className="font-medium">API Server</span>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">Running</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                      <span className="font-medium">GitHub API</span>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">Connected</Badge>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gradient-to-r from-rose-500/20 to-orange-500/20">
                    <p className="text-sm">
                      Total Forks: <span className="font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">{totalForks.toLocaleString()}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
}
