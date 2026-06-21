"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Company } from "@/data/portfolio";

interface CompaniesMarqueeProps {
  companies: Company[];
}

export function CompaniesMarquee({ companies }: CompaniesMarqueeProps) {
  const doubled = [...companies, ...companies];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-center gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((company, i) => (
          <Image
            key={i}
            src={company.logo}
            alt={company.name}
            width={48}
            height={48}
            className="h-12 shrink-0 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </motion.div>
    </div>
  );
}