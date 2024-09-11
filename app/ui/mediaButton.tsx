import React from "react";

interface MediaButtonProps {
  icon: string;
  link: string;
}

export const MediaButton: React.FC<MediaButtonProps> = ({ icon, link }) => {
  return (
    <a
      href={link}
      className="p-2 flex items-center justify-center text-3xl text-blue-500 rounded-full bg-blue-500/10 border-2 border-blue-500/75 hover:text-neutral-50 hover:bg-blue-500/75 hover:border-blue-500"
    >
      <span className={icon}></span>
    </a>
  );
};
