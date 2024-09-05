import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="section">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
        <div className="flex-1 space-y-2">
          <h1 className="font-bold text-4xl md:text-5xl">Steven Penafiel</h1>
          <h2 className="min-w-44	font-bold text-neutral-400 text-2xl md:text-3xl text-balance">
            Software Engenier
          </h2>
        </div>
        <a
          href="#"
          className="flex space-x-5 px-5 py-3 text-lg text-blue-500 rounded-lg bg-blue-500/10 border-2 border-blue-500/75 hover:text-neutral-50 hover:bg-blue-500/75 hover:border-blue-500"
        >
          <span className="material-symbols-rounded icon-cv">description</span>
          <span>Open/Download CV</span>
        </a>
      </div>
    </div>
  );
};