"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface AnimatedProgressProps {
  value: number;
  label: string;
  color?: string;
  delay?: number;
}

export function AnimatedProgress({ value, label, color = "bg-primary", delay = 0 }: AnimatedProgressProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.3 }}
          className="text-sm font-bold"
        >
          {value}%
        </motion.span>
      </div>
      <div className="h-4 bg-gradient-to-r from-muted/80 to-muted rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            delay: delay,
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          className={`h-full ${color} rounded-full relative shadow-lg`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full" />
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  );
}

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillsProgressProps {
  skills: Skill[];
}

export function SkillsProgress({ skills }: SkillsProgressProps) {
  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <AnimatedProgress
          key={skill.name}
          value={skill.level}
          label={skill.name}
          color={skill.color}
          delay={index * 0.15}
        />
      ))}
    </div>
  );
}
