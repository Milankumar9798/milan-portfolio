"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";
import { Card } from "@/components/ui/card";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-4"
        >
           06 — Certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-semibold text-ink max-w-2xl"
        >
          Credentials that back the resume up.
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <Card className="p-6 h-full hover:border-brass/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-brass/10 flex items-center justify-center text-brass shrink-0">
                    <BadgeCheck size={18} />
                  </div>
                  <div>
                    <h3 className="text-ink font-medium leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-ink-muted text-sm mt-1">
                      {cert.issuer}
                    </p>
                    <p className="font-mono text-xs text-brass mt-2">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
