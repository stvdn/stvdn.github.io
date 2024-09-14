"use client";

import React from "react";
import { motion } from "framer-motion";
import { archivements } from "./lib/data";

interface ArchivementItem {
  title: string;
  courseOwner: string;
  link: string;
  type: string;
  completed: boolean;
}

interface ArchivementItemProps {
  archievement: ArchivementItem;
}

const ArchivementItem: React.FC<ArchivementItemProps> = ({ archievement }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col gap-2 mx-16 py-12 lg:mx-24 border-b-2 border-neutral-500 last:border-none"
    >
      <div className="flex items-center gap-2">
        <span
          className={`${
            archievement.completed == true
              ? "icon-[line-md--confirm-square-filled]"
              : "icon-[line-md--confirm-square-filled-to-square-filled-transition]"
          } hidden text-2xl md:blockz`}
        ></span>
        <h2 className="text-2xl font-bold">{archievement.title}</h2>
      </div>
      <p>{archievement.courseOwner}</p>
      {archievement.link && (
        <a className="text-blue-500" href={archievement.link} target="_blank">
          Certificate Link
        </a>
      )}
      <p>{archievement.type}</p>
    </motion.div>
  );
};

export const Archivement: React.FC = () => {
  const archivementsList: ArchivementItem[] = archivements;

  return (
    <div className="section bg-neutral-800 rounded-3xl">
      <h1 className="flex items-center justify-center gap-2 text-4xl font-bold mt-12">
        <span className="icon-[line-md--star-alt-filled]"></span> Archivements
      </h1>
      {archivementsList.map((archievement, index) => (
        <ArchivementItem archievement={archievement} key={index} />
      ))}
    </div>
  );
};
