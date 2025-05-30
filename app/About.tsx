import React, { Fragment } from "react";
import { contactData } from "./lib/data";

interface ContactInfoItem {
  title: string;
  info: string;
}

interface HeadingIconProps {
  heading: string;
  icon: string;
}

const HeadingIcon: React.FC<HeadingIconProps> = ({ heading, icon }) => {
  return (
    <Fragment>
      <h3 className="flex items-center gap-2 font-bold text-xl md:text-3xl">
        <span className={icon}></span>
        {heading}
      </h3>
    </Fragment>
  );
};

export const About: React.FC = () => {
  const introMsg: string = "Highly adaptable software engineer with 4 years of experience in software development. My experience includes developing web applications and implementing software solutions, leveraging languages like Python, PowerShell, JavaScript, and PHP, along with frameworks such as Angular, React, Laravel, and Flask. I enjoy working in collaborative, agile teams and continuously seek to grow as a software engineer.";
  const contactInfo: ContactInfoItem[] = contactData;

  return (
      <div className="grid grid-cols-1 gap-9 py-6 px-10 md:grid-cols-2 lg:gap-20 md:px-24 md:py-12">
        <div className="flex flex-col">
          <HeadingIcon
            heading="About Me"
            icon="icon-[line-md--emoji-grin-filled]"
          />
          <p className="mt-4 text-justify">{introMsg}</p>
        </div>
        <div className="flex flex-col">
          <HeadingIcon
            heading="Contact Information"
            icon="icon-[line-md--phone-call-loop]"
          />
          <ul className="mt-4">
            {contactInfo.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.info}
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};
