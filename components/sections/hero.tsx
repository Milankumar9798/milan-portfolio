"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/magnetic";
import { profile } from "@/lib/data";

const BOOT_LINES = [
  "profile.compile(milan_kumar)",
  "resolving roles: [Software Engineer, Java Developer, Full-Stack Developer]",
  "status: ready",
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < BOOT_LINES.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 550);
      return () => clearTimeout(t);
    }
  }, [lineIndex]);

  useEffect(() => {
    const t = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-grid-pattern bg-grid"
    >
      <div className="absolute inset-0 bg-glow-radial pointer-events-none" />
      <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-brass/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-signal-green/5 blur-3xl animate-float pointer-events-none" />

      <div className="relative mx-auto max-w-6xl w-full px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          {/* terminal boot log */}
          <div className="font-mono text-xs text-ink-dim space-y-1 mb-8 h-16">
            {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === BOOT_LINES.length - 1 ? "text-signal-green" : ""}
              >
                <span className="text-brass">$</span> {line}
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-eyebrow mb-4"
          >
            // 01 — Hello
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-ink"
          >
            {profile.name}
          </motion.h1>

          <div className="h-10 mt-4">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="font-mono text-lg md:text-xl text-brass terminal-caret"
            >
              {profile.roles[roleIndex]}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 max-w-lg text-ink-muted text-base md:text-lg leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button asChild>
                <a href="/resume.pdf" download>
                  <FileDown size={16} /> Download Resume
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline">
                <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}); }}>
                  Hire Me <ArrowRight size={16} />
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="text-ink-muted hover:text-brass transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* floating code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="hidden md:block"
        >
          <div className="rounded-2xl border border-base-border bg-base-surface/70 backdrop-blur-xl shadow-2xl overflow-hidden animate-float">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-base-border">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
              <span className="ml-2 font-mono text-xs text-ink-dim flex items-center gap-1">
                <Code2 size={12} /> Engineer.java
              </span>
            </div>
            <pre className="p-5 text-xs md:text-sm font-mono leading-relaxed text-ink-muted overflow-x-auto">
{`public class Engineer {
  String name = "Milan Kumar";
  String focus = "Java • Full-Stack";
  int leetcode = 100;

  void ship() {
    while (learning) {
      build();
      review();
      deploy();
    }
  }
}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
