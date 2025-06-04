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

const ArchivementItem: React.FC<ArchivementItem> = ({title, courseOwner, link, type, completed}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col gap-2 py-12 mx-16 lg:mx-24 border-b-2 border-neutral-500 last:border-none"
    >
      <div className="flex items-center gap-2">
        <span
          className={`${
            completed
              ? "icon-[line-md--confirm-square-filled]"
              : "icon-[line-md--confirm-square-filled-to-square-filled-transition]"
          } hidden text-2xl md:block`}
        ></span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p>{courseOwner}</p>
      {link && (
        <a className="text-blue-500" href={link} target="_blank">
          Certificate Link
        </a>
      )}
      <p>{type}</p>
    </motion.div>
  );
};

export const Archivement: React.FC = () => {
  const archivementsList: ArchivementItem[] = archivements;

  return (
    <div className="section bg-blue-500/10 border-2 border-blue-500/75 rounded-3xl mx-96 lg:mx-40">
      <h1 className="flex items-center justify-center gap-2 text-4xl font-bold mt-12">
        <span className="icon-[line-md--star-alt-filled]"></span> Archivements
      </h1>
      {archivementsList.map((archievement, index) => (
        <ArchivementItem {...archievement} key={index} />
      ))}
    </div>
  );
};
