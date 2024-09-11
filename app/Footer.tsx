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
    <div className="bg-neutral-800 w-full py-10 px-5 rounded-md">
      <div className="flex gap-5 items-center justify-center">
        {medias.map((media, index) => (
          <MediaButton key={index} icon={media.icon} link={media.link} />
        ))}
      </div>
      <p className="text-sm text-center mt-5">
        © This is my personal web portfolio. Feel free to review the source code
        on my GitHub.
      </p>
    </div>
  );
};
