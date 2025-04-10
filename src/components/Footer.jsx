import React from "react";
import styled from "styled-components";
import { FaImdb, FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const footerData = [
  {
    id: 1,
    href: "https://github.com/PaulEvans78",
    icon: <FaGithub />,
    des: "Github",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/paul-evans-3a74605/",
    icon: <FaLinkedin />,
    des: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 3,
    href: "https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",
    icon: <FaImdb />,
    des: "Imdb",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const StyledFooter = styled.footer`
  background-color: var(--main-hero-backgroundcolor);
  max-width: 100vw;
  min-width: 100vw;
  z-index: 98;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  padding-top: 4em;
  padding-bottom: 6em;

  line-height: 24px;
  color: var(--main-font-color);
`;

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2em;
    padding-right: 0em;
    text-align: center;
`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-bottom: -0.5em;

   &:hover {
    color: var(--main-button-hover-color);
    text-decoration: underline;
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }
`;

const StyledTelLink = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 500;
 


   &:hover {
    color: var(--main-button-hover-color);
    text-decoration: underline;
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  padding-top: 0em;
`;

const StyledIcon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 2em 0em 2em;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconDes = styled.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 12px;
  line-height: 18px;
  color: var(--main-font-color);
  text-align: center;
  margin-top: 0.5em;


  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  padding-left: 0.5em;
`;


const Styledp = styled.p`
font-family: bely-display, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  margin: 1px;

  @media (max-width: 768px) {
    font-weight: 400;
    -webkit-text-stroke: 0.3px;
  }
`;

const StyledMicrop = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin: 1px;
`;

const StyledIdent = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  text-align: center;
`;

const StyledLogo = styled.p`
   font-family: bely-display, sans-serif;
   font-weight: 400;
   font-style: normal;
   font-size: 48px;
   color: var(--main-font-color);
   margin-top: 0.25em;

   @media (max-width: 768px) {
    font-weight: 400;
    -webkit-text-stroke: 0.3px;
  }
`;

const Footer = React.forwardRef((props, ref) => (
  <StyledFooter ref={ref}>
    <StyledLogoContainer>
      <Link to="/">
      <StyledIdent>
           <StyledLogo> 
            PE
           </StyledLogo> 
          </StyledIdent>
      </Link>
    </StyledLogoContainer>
    <Icons />

    <StyledContactContainer>
      <Styledp>Paul Evans</Styledp>
      <StyledMailLink>
        <a href="mailto:paul@paulevans.se">paul@paulevans.se</a>
      </StyledMailLink>
      <StyledTelLink>
        <a href="tel:+46739908858">+46739908858</a>
      </StyledTelLink>
      <StyledMicrop>Copyright 2025.</StyledMicrop>
    </StyledContactContainer>
  </StyledFooter>
));

const Icons = () => {
  return (
    <IconContainer>
      <IconContext.Provider value={{ size: "2em" }}>
        {footerData.map((Link) => (
          <StyledIcon
            href={Link.href}
            key={Link.id}
            target={Link.target}
            rel={Link.rel}
          >
            {Link.icon}

            <IconDes>{Link.des}</IconDes>
          </StyledIcon>
        ))}
      </IconContext.Provider>
    </IconContainer>
  );
};

export default Footer;
