"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "./lib/data";

interface ExperencieItem {
  company: string;
  location: string;
  time: string;
  rol: string;
  intro: string;
  tasks: string[];
  stack: string[];
}

interface ExperencieItemtProps {
  experience: ExperencieItem;
}

const ExperienceItem: React.FC<ExperencieItemtProps> = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col gap-2 mx-16 py-12 lg:mx-24 border-b-2 border-neutral-500 last:border-none"
    >
      <h2>
        <span className="text-2xl font-bold px-2 py-1 bg-neutral-50 text-neutral-900 rounded-lg">
          {experience.rol}
        </span>
        <span className="ml-2 text-2xl font-bold">at {experience.company}</span>
      </h2>
      <p>{experience.location}</p>
      <p>{experience.time}</p>
      <div className="flex my-2">
        {experience.stack.map((tec, index) => (
          <span
            key={index}
            className="bg-neutral-50 text-neutral-900 text-sm font-bold me-2 px-2.5 py-0.5 rounded border border-neutral-900"
          >
            {tec}
          </span>
        ))}
      </div>
      <p>{experience.intro}</p>
      <ul className="list-disc ml-10">
        {experience.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const experienceList: ExperencieItem[] = experiences;

  return (
    <div className="section bg-neutral-800 rounded-3xl ">
      <h1 className="flex items-center justify-center gap-2 text-4xl font-bold mt-12">
        <span className="icon-[line-md--briefcase-filled]"></span>
        Experience
      </h1>
      {experienceList.map((experience, index) => (
        <ExperienceItem experience={experience} key={index} />
      ))}
    </div>
  );
};
