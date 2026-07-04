"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, profile, experience } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-4"
        >
          // 02 — About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-semibold text-ink max-w-2xl"
        >
          Still compiling — and enjoying every build.
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-[1fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-ink-muted leading-relaxed"
          >
            <p>
              I&apos;m a Computer Science undergraduate at KIET Group of
              Institutions, working mainly in Java and the JavaScript
              ecosystem. My focus is full-stack development — from
              designing REST APIs and MongoDB schemas to shipping the React
              interfaces that sit on top of them.
            </p>
            <p>
              Outside of coursework, I spend a lot of time on Data
              Structures & Algorithms — {" "}
              <span className="text-ink font-medium">
                100+ problems solved on LeetCode
              </span>{" "}
              — because I think clean problem-solving is what separates code
              that works from code that&apos;s actually good.
            </p>
            <p>{experience.detail}</p>

            <div className="pt-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-signal-green/30 bg-signal-green/5 px-4 py-2 text-sm text-signal-green">
                <span className="h-2 w-2 rounded-full bg-signal-green animate-pulse" />
                {experience.status}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="flex items-center gap-2 font-display text-lg text-ink mb-6">
              <GraduationCap size={20} className="text-brass" /> Education
            </h3>
            <ol className="relative border-l border-base-border pl-6 space-y-8">
              {education.map((edu, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-brass ring-4 ring-base" />
                  <p className="font-mono text-xs text-brass mb-1">
                    {edu.period}
                  </p>
                  <p className="text-ink font-medium">{edu.degree}</p>
                  <p className="text-ink-muted text-sm mt-0.5">
                    {edu.school}
                  </p>
                  <p className="text-ink-dim text-sm">{edu.detail}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
