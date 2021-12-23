import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  const downloadCV = () => {
    window.location.href =
      "https://github.com/stvdn/stvdn.github.io/assets/cv.pdf";
  };
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Steven Peñafiel
        </SectionTitle>
        <SectionText>Programador</SectionText>
        <Button onClick={downloadCV}>CV</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
