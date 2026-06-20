"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  driftX: number;
  driftY: number;
}

export function MouseFollower({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextId = useRef(0);
  const lastSpawn = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    const now = Date.now();
    if (now - lastSpawn.current < 40) return;
    lastSpawn.current = now;

    const id = nextId.current++;
    const angle = Math.random() * Math.PI * 2;
    const scale = 0.5 + Math.random() * 0.8;
    const driftX = Math.cos(angle) * (20 + Math.random() * 30);
    const driftY = Math.sin(angle) * (20 + Math.random() * 30);

    setParticles((prev) => {
      const next = [...prev, { id, x, y, angle, scale, driftX, driftY }];
      return next.length > 25 ? next.slice(-25) : next;
    });

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 800);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          left: springX,
          top: springY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.5,
        }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.4 },
        }}
      >
        <div
          className="rounded-full bg-white"
          style={{ width: 8, height: 8, boxShadow: "0 0 12px 4px rgba(255,255,255,0.6)" }}
        />
      </motion.div>

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="pointer-events-none absolute text-white will-change-transform"
          style={{
            left: p.x,
            top: p.y,
            fontSize: 6 * p.scale,
            textShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 1, scale: p.scale, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: p.driftX,
            y: p.driftY,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ✦
        </motion.span>
      ))}

      <div className="relative z-10">{children}</div>
    </div>
  );
}