import React, { Fragment } from "react";

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
        <span className="material-symbols-rounded md-36">{icon}</span>
        {heading}
      </h3>
    </Fragment>
  );
};

export const About: React.FC = () => {
  const introMsg: string = `I am a systems engineer with experience in software development across web, mobile, and process automation programming languages. 
  I have worked for financial institutions, startups, and as a freelancer, always contributing my knowledge to develop scalable solutions and my flexibility 
  to learn new technologies. Currently, I am training in cloud computing with AWS, with the aim of focusing my career towards the role of solutions architect.`;

  const contactInfo: ContactInfoItem[] = [
    { title: "Location", info: "Ecuador, Quito" },
    { title: "Phone", info: "+593 958836085" },
    { title: "Email", info: "stevendanny2000@gmail.com" },
  ];

  return (
    <div className="section">
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <HeadingIcon heading="About Me" icon="emoji_people" />
          <p className="mt-4 text-justify">{introMsg}</p>
        </div>
        <div className="flex flex-col">
          <HeadingIcon
            heading="Contact Information"
            icon="connect_without_contact"
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
    </div>
  );
};
