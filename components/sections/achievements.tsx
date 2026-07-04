"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Card } from "@/components/ui/card";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-4"
        >
          // 05 — Achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-semibold text-ink max-w-2xl"
        >
          Numbers I&apos;m proud of, so far.
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-6 text-center hover:border-brass/40 transition-colors">
                <p className="font-display text-4xl font-semibold text-brass mb-2">
                  {a.stat}
                </p>
                <p className="text-ink-muted text-sm leading-snug">
                  {a.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
