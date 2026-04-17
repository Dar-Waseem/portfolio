"use client";

import { motion } from "framer-motion";
import { Heart, Code2, Briefcase, MessageCircle } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Code2 },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Briefcase },
  { name: "Twitter", href: "https://twitter.com", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="py-12 border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Built with <Heart className="h-4 w-4 inline text-red-500" /> by John Doe
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
