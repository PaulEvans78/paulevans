import styled from "styled-components";
import Hero from "../components/Hero";
import HeroText from "../components/HeroText";
import ThreeSplit from "../components/ThreeSplit";
import MasonryGrid from "../components/masonryGrid";
import CopySection from "../components/CopySection";
import FourSplit from "../components/FourSplit";
import TwoSplit from "../components/TwoSplit";
import MasonryGrid2 from "../components/masonryGrid2";
import ThreeSplit2 from "../components/ThreeSplit2";

const StyledHomeContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-content: center;
  padding-top: 80px;
  /* padding-left: 20px;
  padding-right: 20px; */

  @media screen and (max-width: 960px) {
    padding-top: 80px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 0px;
  }

  @media screen and (max-width: 548px) {
    padding-top: 20px;
  }
`;

const StyledpaddingContainer = styled.div`
 width: 100%;
  padding-left: 20px;
  padding-right: 20px;

`;

const Home = () => {
  return (
    <StyledHomeContainer>

      <Hero />

      <StyledpaddingContainer>

      <HeroText />

      <ThreeSplit />

      <MasonryGrid />

      <CopySection />

      <FourSplit />

      <TwoSplit />

      <MasonryGrid2 />

      <ThreeSplit2 />

      </StyledpaddingContainer>

    </StyledHomeContainer>
  );
};

export default Home;
