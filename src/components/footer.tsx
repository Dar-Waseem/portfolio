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
    <footer className="py-12 border-t border-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Built with <Heart className="h-4 w-4 inline text-rose-500 fill-rose-500 animate-pulse" /> by <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">John Doe</span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-gradient-to-br ${
                  index === 0 ? "from-gray-700 to-slate-800 hover:from-purple-600 hover:to-pink-600" :
                  index === 1 ? "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" :
                  "from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
                } text-white transition-all shadow-md hover:shadow-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">All rights reserved.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
