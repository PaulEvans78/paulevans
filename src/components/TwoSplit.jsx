import React from "react";
import Film from "../assets/ghost.mov";
import Img from "/Ansiktet.jpg";
import styled from "styled-components";

const StyledGridContainer = styled.div`
display: grid;
grid-template-columns: 1.5fr 1fr;
 padding-top: 16px;
gap: 16px;
  width: 100%;

`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  overflow: hidden;
  border-radius: 6px;
`;


const Styledp = styled.p`
font-size: 14px;
  color: white;
  font-weight: 500;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;

  @media (max-width: 960px) {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledCaseContents = styled.div`
  position: absolute;
  bottom: 4px;
  left: 16px;
  right: 16px;
  display: flex;
  align-items: flex-end;
  text-align: left;
  width: auto;
  height: auto;
  padding: 0;
  border-radius: 6px;
  z-index: 2;
`;



const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 6px;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
  object-fit: cover; 
  border-radius: 6px;
`;


const StyledOpacity = styled.div`
 position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 6px;
  z-index: 1;

  @media (max-width: 960px) {
    background: linear-gradient(to top, rgba(10, 10, 10, 0.6) 0%, transparent 30%);
    opacity: 1;
  }
`;

const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 6px;
  transition: transform 1s ease-in-out;
  cursor: pointer;

  &:hover ${StyledOpacity} {
    opacity: 1;

    @media (max-width: 960px) {
      opacity: 1;
    }
  }

  &:hover ${Styledp} {
    opacity: 1;
    transform: translateY(0);

    @media (max-width: 960px) {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TwoSplitCard = () => {
 
  return (
    <StyledGridContainer>
    <StyledWrapper>
      <StyledCaseMain>
        <StyledVideo
          src={Film}
          autoPlay
          loop
          muted
          playsInline
          alt="A short peice from the music video Hunters Moon by Ghost."
        />

        <StyledOpacity>
          <StyledCaseContents>
            <Styledp>Ghost - Hunters Moon</Styledp>
          </StyledCaseContents>
        </StyledOpacity>
      </StyledCaseMain>
    </StyledWrapper>

<StyledWrapper>
<StyledCaseMain >
           <StyledImg
             src={Img}
             alt="Two men in tracksuits stand by a purple soviet car."
           />

           <StyledOpacity>
             <StyledCaseContents>
               <Styledp>
                Ansiktet - Fyra Våningar Upp
               </Styledp>
             </StyledCaseContents>
           </StyledOpacity>
        </StyledCaseMain>
</StyledWrapper>
</StyledGridContainer>
  );
};

export default TwoSplitCard;

