"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

interface Spark {
  id: number;
  x: number;
  y: number;
  driftX: number;
  driftY: number;
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0 14.5 9.5 24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0Z" />
    </svg>
  );
}

export function MouseFollower({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const nextId = useRef(0);
  const lastSpawn = useRef(0);
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 250, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 28 });

  return (
    <div
      className="relative"
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={(event) => {
        if (reduceMotion) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
        setIsVisible(true);

        const now = performance.now();
        if (now - lastSpawn.current < 90) return;
        lastSpawn.current = now;

        setSparks((current) => [
          ...current.slice(-7),
          {
            id: nextId.current++,
            x,
            y,
            driftX: Math.random() * 12 - 6,
            driftY: -8 - Math.random() * 12,
          },
        ]);
      }}
    >
      <motion.span
        aria-hidden="true"
        className="cursor-star"
        style={{ left: springX, top: springY, willChange: isVisible ? "transform" : "auto" }}
        animate={{ opacity: isVisible && !reduceMotion ? 0.9 : 0, scale: isVisible ? 1 : 0.7 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        <Star />
      </motion.span>

      {sparks.map((spark) => (
        <motion.span
          key={spark.id}
          aria-hidden="true"
          className="cursor-spark"
          style={{ left: spark.x, top: spark.y }}
          initial={{ opacity: 0.75, scale: 1, x: 0, y: 0 }}
          animate={{ opacity: 0, scale: 0.2, x: spark.driftX, y: spark.driftY }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            setSparks((current) => current.filter((item) => item.id !== spark.id));
          }}
        >
          <Star />
        </motion.span>
      ))}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
