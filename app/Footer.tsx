import React from "react";
import { medias } from "./lib/data";
import { MediaButton } from "./ui/mediaButton";

interface MediaItem {
  icon: string;
  link: string;
}

export const Footer: React.FC = () => {
  const mediaInfo: MediaItem[] = medias;

  return (
    <div className="bg-blue-500/10 border-t-2 border-blue-500/75 w-full py-10 px-5 rounded-md">
      <div className="flex gap-5 items-center justify-center">
        {medias.map((media, index) => (
          <MediaButton key={index} icon={media.icon} link={media.link} />
        ))}
      </div>
      <p className="text-sm text-center mt-5">
        © This is my personal web portfolio. Feel free to review the 
        <a className="text-blue-500" href="https://github.com/stvdn/stvdn.github.io" target="_blank">
         &nbsp; source code &nbsp;
        </a>
         on my GitHub.
      </p>
    </div>
  );
};
