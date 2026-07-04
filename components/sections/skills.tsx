"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
} from "lucide-react";
import { skills } from "@/lib/data";
import { Card } from "@/components/ui/card";

const ICONS: Record<string, React.ElementType> = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "Tools & Platforms": Wrench,
  Core: Brain,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-4"
        >
           03 — Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-semibold text-ink max-w-2xl"
        >
          The stack behind the builds.
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => {
            const Icon = ICONS[group.category] ?? Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-6 h-full hover:border-brass/40 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-xl bg-brass/10 flex items-center justify-center text-brass">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-ink font-medium">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, ii) => (
                      <motion.span
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: gi * 0.08 + ii * 0.04 }}
                        className="font-mono text-xs px-3 py-1.5 rounded-full border border-base-border text-ink-muted hover:border-brass/50 hover:text-ink transition-colors"
                      >
                        {item.name}
                        {item.level && (
                          <span className="text-brass ml-1">•</span>
                        )}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
