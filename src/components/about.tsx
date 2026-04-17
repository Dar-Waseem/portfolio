"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code that scales.",
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
    iconBg: "from-blue-500 to-cyan-500",
    textGradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces.",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    iconBg: "from-violet-500 to-fuchsia-500",
    textGradient: "from-violet-600 to-fuchsia-600",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency.",
    gradient: "from-yellow-500/20 via-orange-500/10 to-amber-500/20",
    iconBg: "from-yellow-500 to-orange-500",
    textGradient: "from-yellow-600 to-orange-600",
  },
  {
    icon: Globe,
    title: "Responsive",
    description: "Building apps that work seamlessly on all devices.",
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
    iconBg: "from-emerald-500 to-teal-500",
    textGradient: "from-emerald-600 to-teal-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with expertise in modern web technologies.
            I love turning complex problems into simple, beautiful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full border-0 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow`}>
                <CardContent className="p-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.iconBg} w-fit mb-4 shadow-lg`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${feature.textGradient} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
