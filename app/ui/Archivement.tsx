"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArchivementItem {
  title: string;
  courseOwner: string;
  link: string;
  type: string;
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
      <div className="flex items-center	 gap-2">
        <span className="material-symbols-rounded md-24">
          {archievement.type.toLowerCase() == "degree" ? "school" : "license"}
        </span>
        <h2 className="text-2xl font-bold">{archievement.title}</h2>
      </div>
      <p>{archievement.courseOwner}</p>
      {archievement.link && (
        <a href={archievement.link} target="_blank">
          {archievement.link}
        </a>
      )}
      <p>{archievement.type}</p>
    </motion.div>
  );
};

export const Archivement: React.FC = () => {
  const archivementList: ArchivementItem[] = [
    {
      title: "Computer Systems Engineering",
      courseOwner: "Pontificia Universidad Católica del Ecuador",
      link: "", // No link provided for this item
      type: "Degree",
    },
    {
      title: "SOLID Programming Principles",
      courseOwner: "LinkedIn Learning",
      link: "https://www.linkedin.com/learning/certificates/520fb99d8b0792228ecbac1658675a7f6d7e5cfa89d2710d65212baa3634e6b9",
      type: "Online course",
    },
    {
      title: "Docker Foundations Professional Certificate",
      courseOwner: "LinkedIn Learning",
      link: "https://www.linkedin.com/learning/certificates/10d1d67411fbc2eebd473858e8186864d9173ee25988a83cb3945ed2bbc7547b",
      type: "Online course",
    },
  ];

  return (
    <div className="section bg-neutral-800 rounded-3xl">
      <h1 className="flex justify-center gap-2 text-4xl font-bold mt-12">
        <span className="material-symbols-rounded md-36">developer_guide</span>
        Archivements
      </h1>
      {archivementList.map((archievement, index) => (
        <ArchivementItem archievement={archievement} key={index} />
      ))}
    </div>
  );
};
