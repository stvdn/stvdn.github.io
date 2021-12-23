import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCodeBadge } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  A,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <A>
          <DiCodeBadge size="3rem" /> <Span>Steven Peñafiel</Span>
        </A>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tec">
          <NavLink>Tecnologías</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Acerca</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/stvdn" target="_blank">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/stevendanny/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
