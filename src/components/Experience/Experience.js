import React from "react";
import _default from "../../themes/default";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcBusiness, FaChalkboardTeacher } from "react-icons/fc"
import { SubtitleTimeLineElement, TitleTimeLineElement, ListTasks, ListTasksElement } from "./ExperienceStyles";
import { TimeLineExperienceData } from "../../constants/constants";

const Experience = () => {
    const listTimeLine = TimeLineExperienceData.map((data)=>
        <ListTimeLine key={data.toString()} title={data.title} date={data.date} enterprise={data.enterprise} location={data.location} tasks={data.tasks} icon={data.icon}/>
    )
    return (
        <Section id="Experience">
            <SectionDivider />
            <SectionTitle>Experiencia</SectionTitle>
            <VerticalTimeline>
                {listTimeLine}
            </VerticalTimeline>
        </Section>
    )
}

const ListTimeLine = (props) => {
    const listTimeLineElement = props.tasks.map((data, index)=>
        <ListTimeLineElement key={index.toString()} task={data} />
    );
    console.log(props.icon);
    return (<VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: _default.colors.background1, border: "1px solid #fff", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #fff" }}
        date="2011 - present"
        iconStyle={{ background: _default.colors.background1, color: '#fff' }}
        icon={<props.icon />}
    >
        <TitleTimeLineElement>{props.title}</TitleTimeLineElement>
        <SubtitleTimeLineElement>{props.date} • {props.enterprise} • {props.location}</SubtitleTimeLineElement>
        {listTimeLineElement}
    </VerticalTimelineElement>)
}

const ListTimeLineElement = (props) => {
    return (<ListTasks>
        <ListTasksElement>{props.task}</ListTasksElement>
    </ListTasks>)
}

export default Experience; 