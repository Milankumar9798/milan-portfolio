"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Card } from "@/components/ui/card";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <Card className="group relative overflow-hidden p-0 h-full flex flex-col hover:border-brass/40 transition-colors duration-300">
          {/* preview */}
          <div className="relative h-44 bg-gradient-to-br from-base-surface2 via-base-surface to-brass/10 flex items-center justify-center overflow-hidden border-b border-base-border">
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
            <span className="relative font-mono text-4xl text-brass/30 group-hover:text-brass/50 transition-colors">
              {`</>`}
            </span>
            {project.featured && (
              <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-widest bg-brass text-base px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          <div className="p-6 flex flex-col flex-1">
            <p className="font-mono text-xs text-ink-dim mb-2">{project.period}</p>
            <h3 className="font-display text-lg text-ink font-semibold mb-2 flex items-center gap-1.5">
              {project.title}
              <ArrowUpRight
                size={16}
                className="text-brass opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </h3>
            <p className="text-ink-muted text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <ul className="text-sm text-ink-muted space-y-1.5 mb-5">
              {project.features.slice(0, 3).map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-brass mt-1.5 h-1 w-1 rounded-full bg-brass shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-base-border text-ink-dim"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-4 pt-4 border-t border-base-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-brass transition-colors"
                >
                  <Github size={15} /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-brass transition-colors"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-4"
        >
           04 — Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-semibold text-ink max-w-2xl"
        >
          Things I&apos;ve shipped and learned from.
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
