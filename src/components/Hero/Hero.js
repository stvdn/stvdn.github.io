import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        ¿Tienes algún proyecto <br /> en mente? <br />
      </SectionTitle>
      <SectionText>Expande tu negocio al mundo virtual</SectionText>
      <Button>Contactar</Button>
    </LeftSection>
  </Section>
);

export default Hero;
