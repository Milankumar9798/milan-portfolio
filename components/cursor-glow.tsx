"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isTouch, setIsTouch] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.3 });
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.3 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      style={{ translateX: springX, translateY: springY }}
      className="pointer-events-none fixed top-0 left-0 z-[1] h-[400px] w-[400px] rounded-full opacity-40 mix-blend-screen hidden md:block"
      aria-hidden="true"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.14),transparent_70%)]" />
    </motion.div>
  );
}
