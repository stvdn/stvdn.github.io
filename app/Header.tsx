'use client'
import React from "react";
import Typewriter from 'typewriter-effect';

export const Header: React.FC = () => {
  return (
      <div className="flex flex-col items-center w-full py-6 gap-4 text-center md:flex-row md:text-left md:px-24 md:py-12">
        <div className="flex-1 space-y-2">
          <h1 className="font-bold text-4xl md:text-5xl">Steven Peñafiel</h1>
          <h2 className="min-w-44	font-bold text-neutral-400 text-2xl md:text-3xl text-balance">
            <Typewriter
              options={{
                strings: ["Software Engineer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

        </div>
        <a
          href="/docs/CVEn.pdf"
          target="_blank"
          className="flex space-x-2 px-5 py-3 text-lg text-blue-500 rounded-lg bg-blue-500/10 border-2 border-blue-500/75 hover:text-neutral-50 hover:bg-blue-500/75 hover:border-blue-500"
        >
          <span className="icon-[line-md--download-loop] text-3xl"></span>
          <span>Open/Download CV</span>
        </a>
      </div>
  );
};
