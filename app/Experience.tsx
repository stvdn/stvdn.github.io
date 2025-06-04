"use client";

import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { experiences } from "./lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

interface ExperencieItem {
  company: string;
  location: string;
  time: string;
  rol: string;
  intro: string;
  tasks: string[];
  stack: string[];
}

const ExperienceItem: React.FC<ExperencieItem> = ({
  company,
  location,
  time,
  rol,
  intro,
  tasks,
  stack,
}) => {
  const { ref, inView } = useInView({ threshold: 0 })

  return (
    <div ref={ref} className="vertical-timeline-element">
        <VerticalTimelineElement
          visible={inView}
          contentStyle={{
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            border: "2px solid rgba(59, 130, 246, 0.75)",
            boxShadow: "none",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(59, 130, 246, 0.75)",
          }}
          iconStyle={{
            background: "rgba(59, 130, 246)",
            color: "#fff",
            textAlign: "center",
            alignContent: "center",
          }}
          icon={<span className="icon-[line-md--briefcase-filled]"></span>}
        >
          <h2 className="flex items-end flex-wrap gap-y-3">
            <span className="text-xl md:text-2xl font-bold px-2 py-1 bg-neutral-50 text-neutral-900 rounded-lg">
              {rol}
            </span>
            &nbsp;
            <span className="text-xl font-bold md:text-2xl text-neutral-50">at {company}</span>
          </h2>
          <p>{location}</p>
          <p style={{marginTop: "1px !important", marginBottom: "1em"}}>{time}</p>
          <div className="flex flex-wrap gap-y-3 my-2">
            {stack.map((tec, index) => (
              <span
                key={index}
                className="bg-neutral-50 text-neutral-900 text-sm font-bold me-2 px-2.5 py-0.5 rounded border border-neutral-900"
              >
                {tec}
              </span>
            ))}
          </div>
          <ul className="list-disc ml-10">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </VerticalTimelineElement>
      </div>
  );
};

export const Experience: React.FC = () => {
  const experienceList: ExperencieItem[] = experiences;

  return (
    <div className="sm:mx-24 sm:px-16">
      <h1 className="flex items-center justify-center gap-2 text-4xl font-bold mt-12">
        Experience
      </h1>
      <VerticalTimeline layout="1-column-left">
      {experienceList.map((experience, index) => (
        <ExperienceItem {...experience} key={index} />
      ))}
      </VerticalTimeline>
    </div>
  );
};
