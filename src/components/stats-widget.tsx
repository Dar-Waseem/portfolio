"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Stats {
  visitors: number;
  pageViews: number;
}

export function StatsWidget() {
  const [stats, setStats] = useState<Stats>({ visitors: 0, pageViews: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats");
        const data = await response.json();
        setStats(data);

        await fetch("/api/stats?action=track");
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-pink-500/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-fuchsia-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
          <Card className="border-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-teal-500/10 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Visitors</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{stats.visitors.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Page Views</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">{stats.pageViews.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
