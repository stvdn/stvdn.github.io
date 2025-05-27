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

const ExperienceItem: React.FC<ExperencieItem> = ({ company, location, time, rol, intro, tasks, stack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="w-80 flex flex-col gap-2 mx-16 py-12 lg:mx-24 border-b-2 border-neutral-500 last:border-none md:w-full"
    >
      <h2 className="flex items-end flex-wrap gap-y-3">
        <span className="text-xl md:text-2xl font-bold px-2 py-1 bg-neutral-50 text-neutral-900 rounded-lg">
          {rol}
        </span>&nbsp;
        <span className="text-xl font-bold md:text-2xl ">at {company}</span>
      </h2>
      <p>{location}</p>
      <p>{time}</p>
      <div className="flex flex-wrap gap-y-3 my-2">
        {stack.map((tec, index) => (
          <span
            key={index}
            className="bg-neutral-50 text-neutral-900 text-sm font-bold me-2 px-2.5 py-0.5 rounded border border-neutral-900"
          >
            {tec}
          </span>
        ))}
      </div>
      <p>{intro}</p>
      <ul className="list-disc ml-10">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const experienceList: ExperencieItem[] = experiences;

  return (
    <div className="bg-[#33415c] border-2 border-neutral-500 rounded-3xl flex flex-col items-center sm:mx-24 sm:px-16">
      <h1 className="flex items-center justify-center gap-2 text-4xl font-bold mt-12">
        <span className="icon-[line-md--briefcase-filled]"></span>
        Experience
      </h1>
      {experienceList.map((experience, index) => (
        <ExperienceItem {...experience} key={index} />
      ))}
    </div>
  );
};
