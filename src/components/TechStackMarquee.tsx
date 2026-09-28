"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { Technology } from "@/data/tech-stack";

interface TechStackMarqueeProps {
  technologies: Technology[];
}

export function TechStackMarquee({ technologies }: TechStackMarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="tech-marquee">
      <motion.div
        className="tech-track"
        animate={inView && !reduceMotion ? { x: ["0%", "-50%"] } : { x: "0%" }}
        transition={inView && !reduceMotion ? { duration: 32, repeat: Infinity, ease: "linear" } : { duration: 0 }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="tech-group" aria-hidden={copy === 1}>
            {technologies.map((technology) => (
              <div key={technology.name} className="tech-item">
                <Image src={technology.logo} alt="" width={32} height={32} className="tech-logo" />
                <span>{technology.name}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
