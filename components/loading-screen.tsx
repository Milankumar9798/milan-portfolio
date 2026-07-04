"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "$ initializing profile...",
  "$ loading modules: react, node, mongodb...",
  "$ compiling milan-kumar.dev",
  "$ build complete ✓",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < LINES.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 320);
      return () => clearTimeout(t);
    }
    const done = setTimeout(() => setVisible(false), 350);
    return () => clearTimeout(done);
  }, [lineIndex]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
        >
          <div className="font-mono text-sm md:text-base text-ink-muted space-y-2 w-[min(90vw,520px)]">
            {LINES.slice(0, lineIndex).map((line, i) => (
              <p key={i} className={i === lineIndex - 1 ? "text-brass" : ""}>
                {line}
              </p>
            ))}
            <span className="terminal-caret" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
