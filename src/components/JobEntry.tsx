"use client";

import { motion } from "motion/react";
import type { JobEntry as JobEntryType } from "@/data/portfolio";

interface JobEntryProps {
  job: JobEntryType;
}

export function JobEntry({ job }: JobEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 mt-4 mb-14 gap-26 md:grid-cols-[1fr_1.5fr]"
    >
      <div className="space-y-1 border-l border-gray-700 pl-4 md:border-0 md:pl-0">
        <h3 className="text-base font-bold text-white">{job.title}</h3>
        <p className="text-sm text-gray-400">{job.company}</p>
        <p className="text-sm text-gray-500">{job.dateRange}</p>
        <p className="text-sm text-gray-500">{job.location}</p>
      </div>
      <ul className="list-disc space-y-3 pl-5 text-paragraph-list text-sm text-gray-300 md:pl-6 md:text-base">
        {job.bullets.map((bullet, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
          >
            {bullet}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}