import { useRef } from "react";
import styled from "styled-components";
import Aboutme from "../components/AboutMe";
import Commercial from "../components/Commercial";
import MusicVideo from "../components/MusicVideo";
import FilmTv from "../components/FilmTv";
import Concept from "../components/Concept";
import UxUi from "../components/UXUI";
import Tech from "../components/Tech";
import OutsideWork from "../components/OutsideWork";



const StyledAboutContainer = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-left: 2%;
  padding-right: 2%;
  align-content: center;
  margin-top: 180px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 960px) {
    margin-top: 120px;
  }
`;

const About = () => {
  const caseRef = useRef(null);

  const scrollToEvent = () => {
    if (caseRef.current) {
      caseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledAboutContainer>

     <Aboutme />

     <Commercial />

     <MusicVideo />

     <FilmTv />

     <Concept />

     <UxUi />

     <Tech />

     <OutsideWork />

    </StyledAboutContainer>
  );
};

export default About;
