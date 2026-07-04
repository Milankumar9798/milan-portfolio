"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  Award,
  BadgeCheck,
  Mail,
  Github,
  Linkedin,
  FileDown,
} from "lucide-react";
import { profile } from "@/lib/data";

type Item = {
  label: string;
  hint: string;
  icon: React.ReactNode;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const items: Item[] = [
    { label: "Home", hint: "Go to hero", icon: <Home size={16} />, action: () => goTo("home") },
    { label: "About", hint: "Journey & education", icon: <User size={16} />, action: () => goTo("about") },
    { label: "Skills", hint: "Tech stack", icon: <Code2 size={16} />, action: () => goTo("skills") },
    { label: "Projects", hint: "Featured work", icon: <FolderGit2 size={16} />, action: () => goTo("projects") },
    { label: "Achievements", hint: "Stats & wins", icon: <Award size={16} />, action: () => goTo("achievements") },
    { label: "Certifications", hint: "Credentials", icon: <BadgeCheck size={16} />, action: () => goTo("certifications") },
    { label: "Contact", hint: "Get in touch", icon: <Mail size={16} />, action: () => goTo("contact") },
    { label: "Open GitHub", hint: profile.github, icon: <Github size={16} />, action: () => window.open(profile.github, "_blank") },
    { label: "Open LinkedIn", hint: profile.linkedin, icon: <Linkedin size={16} />, action: () => window.open(profile.linkedin, "_blank") },
    { label: "Download Resume", hint: "resume.pdf", icon: <FileDown size={16} />, action: () => window.open("/resume.pdf", "_blank") },
  ];

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 backdrop-blur-sm pt-[14vh] px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-base-border bg-base-surface2 shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-2 border-b border-base-border px-4 py-3">
              <span className="font-mono text-brass text-sm">$</span>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section or action..."
                className="w-full bg-transparent outline-none text-sm font-mono text-ink placeholder:text-ink-dim"
              />
              <kbd className="text-[10px] font-mono text-ink-dim border border-base-border rounded px-1.5 py-0.5">
                esc
              </kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <li className="px-4 py-3 text-sm text-ink-dim font-mono">
                  no results
                </li>
              )}
              {filtered.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-base-surface transition-colors"
                  >
                    <span className="text-brass">{item.icon}</span>
                    <span className="text-sm text-ink">{item.label}</span>
                    <span className="ml-auto text-xs text-ink-dim font-mono truncate max-w-[160px]">
                      {item.hint}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
