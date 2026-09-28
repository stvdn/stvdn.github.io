"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { Company } from "@/data/portfolio";

interface CompaniesMarqueeProps {
  companies: Company[];
}

export function CompaniesMarquee({ companies }: CompaniesMarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="companies-marquee">
      <motion.div
        className="companies-track"
        animate={inView && !reduceMotion ? { x: ["0%", "-50%"] } : { x: "0%" }}
        transition={inView && !reduceMotion ? { duration: 24, repeat: Infinity, ease: "linear" } : { duration: 0 }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="companies-group" aria-hidden={copy === 1}>
            {companies.map((company) => (
              <Image
                key={company.name}
                src={company.logo}
                alt={copy === 0 ? company.name : ""}
                width={48}
                height={48}
                className="company-logo"
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
