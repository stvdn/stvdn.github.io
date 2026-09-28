"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function MouseFollower({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 250, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 28 });

  return (
    <div
      className="relative"
      onPointerLeave={() => setIsVisible(false)}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
        setIsVisible(true);
      }}
    >
      <motion.span
        aria-hidden="true"
        className="cursor-dot"
        style={{ left: springX, top: springY, willChange: isVisible ? "transform" : "auto" }}
        animate={{ opacity: isVisible ? 0.8 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
