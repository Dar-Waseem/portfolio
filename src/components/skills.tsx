"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillsProgress } from "@/components/animated-progress";
import { Zap, Server, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "from-blue-500/10 via-cyan-500/5 to-teal-500/10",
    badgeGradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    gradient: "from-emerald-500/10 via-green-500/5 to-teal-500/10",
    badgeGradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
    gradient: "from-violet-500/10 via-purple-500/5 to-fuchsia-500/10",
    badgeGradient: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Tools",
    skills: ["Figma", "VS Code", "Postman", "Jest", "Storybook"],
    gradient: "from-orange-500/10 via-amber-500/5 to-yellow-500/10",
    badgeGradient: "from-orange-500 to-amber-500",
  },
];

const progressSkills = [
  {
    name: "JavaScript",
    level: 92,
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    name: "TypeScript",
    level: 88,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "React",
    level: 90,
    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  {
    name: "Next.js",
    level: 85,
    color: "bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white",
  },
  {
    name: "Tailwind CSS",
    level: 87,
    color: "bg-gradient-to-r from-teal-500 to-cyan-500",
  },
  {
    name: "Node.js",
    level: 85,
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
  {
    name: "Python",
    level: 78,
    color: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    name: "PostgreSQL",
    level: 82,
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background via-muted/20 to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-bl from-fuchsia-500/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I work with a variety of technologies to bring ideas to life. Here's
            what I use on a daily basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10 backdrop-blur-sm shadow-lg">
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

          <Card className="border-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 backdrop-blur-sm shadow-lg">
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
        </div>

        <Card className="mb-12 border-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 backdrop-blur-sm shadow-lg">
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
                    whileInView={{ strokeDasharray: "281 351" }}
                    viewport={{ once: true }}
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
                    whileInView={{ strokeDasharray: "316 351" }}
                    viewport={{ once: true }}
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
                    whileInView={{ strokeDasharray: "263 351" }}
                    viewport={{ once: true }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full border-0 bg-gradient-to-br ${category.gradient} backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow`}>
                <CardContent className="p-6">
                  <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.badgeGradient} bg-clip-text text-transparent`}>
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} className={`text-sm bg-gradient-to-r ${category.badgeGradient} text-white border-0 shadow-md`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
