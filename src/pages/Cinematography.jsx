import { useRef } from "react";
import styled from "styled-components";
import TitleCommercials from "../components/TitleCommercials";
import TitleNarrative from "../components/TitleNarrative";
import TitlePromos from "../components/TitlePromos";
import WorkCommercial from "../components/WorkCommercial";
import WorkNarrative from "../components/WorkNarrative";
import WorkPromos from "../components/WorkPromos";




const StyledCinemaContainer = styled.section`
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

const Cinema = () => {
  const caseRef = useRef(null);

  const scrollToEvent = () => {
    if (caseRef.current) {
      caseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledCinemaContainer>

     <TitleCommercials />

     <WorkCommercial />

     <TitleNarrative />

     <WorkNarrative />

     <TitlePromos />

     <WorkPromos />

    </StyledCinemaContainer>
  );
};

export default Cinema;
