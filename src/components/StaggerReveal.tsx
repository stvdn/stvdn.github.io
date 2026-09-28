"use client";

import { motion, useReducedMotion } from "motion/react";

const variants = {
  hidden: { opacity: 0.65, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function StaggerReveal({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      custom={index}
      variants={variants}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
