import React from "react";
import { DiFirebase, DiRedis, DiTerminalBadge } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tec">
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionText>
      Tengo una rápida adaptación a los lenguajes de programación.
    </SectionText>
    <List>
      <ListItem>
        <DiRedis size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React, Angular, Ionic</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Node, PHP, Firebase, SQL, NoSQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminalBadge size="3rem" />
        <ListContainer>
          <ListTitle>Otros</ListTitle>
          <ListParagraph>Python, C#, TypeScript, Linux.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
