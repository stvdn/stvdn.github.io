import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import FileSaver from "file-saver";

const Hero = (props) => {
  const saveFile = () => {
    FileSaver.saveAs(
      "http://www.africau.edu/images/default/sample.pdf",
      "StevenPenafielCV.pdf"
    );
  };
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Steven Peñafiel
        </SectionTitle>
        <SectionText>Programador</SectionText>
        <Button onClick={saveFile}>CV</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
