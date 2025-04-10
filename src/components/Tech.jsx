import React from "react";
import Film from "/Avatar_May_TheElectricState.mp4";
import Img from "/Beauty2.jpg";
import styled from "styled-components";

const StyledGridContainer = styled.div`
display: grid;
grid-template-areas: 
"copy copy"
"video video";
 padding-top: 16px;
 padding-bottom: 80px;
gap: 16px;
  width: 100%;

  @media (max-width: 767px) {
    grid-template-areas: 
    "copy"
    "video"
    "video";
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  overflow: hidden;
  border-radius: 6px;
`;

const StyledCopy = styled.div`
grid-area: copy;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.2rem;
  overflow: hidden;
  text-align: center;
  /* padding-top: 60px; */
  padding-bottom: 60px; 
  /* padding-left: 16px; */

  /* Slide-in animation */
  transform: translateX(-100%); 
  animation: slideIn 1s ease-out forwards; 

  @media (max-width: 960px) {
    /* width: 90%; */
    align-items: center;
    min-height: 250px;
    padding-top: 0px;
    padding-bottom: 0px; 
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0; 
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    min-height: 140px;
  }
`;

const StyledText = styled.p`
  width: 70%;
  align-self: center;
  color: var(--main-p-color);
  font-size: 18px;
  text-align: center;
  margin-top: 0;

  @media (max-width: 960px) {
    font-size: 16px;
    width: 80%;
  }

  @media (max-width: 768px) {    
    width: 100%;
  }
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
  aspect-ratio: 16/9;
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

const Tech = () => {
 
  return (
    <StyledGridContainer>
      <StyledCopy>
       
      <h2>Emerging Technology </h2>

       <StyledText>
       I have a deep interest in emerging tech, especially AI and AR, and how it can elevate both physical and digital brand experiences. 
       I use AI tools to quickly generate visual concepts, streamline production workflows, and explore new creative directions. 
       Whether it's image and video generation or AR-enhanced campaigns, I'm always experimenting with how storytelling can evolve through tech.
       </StyledText>
      

     </StyledCopy>
    <StyledWrapper>
      <StyledCaseMain>
      <StyledImg
             src={Img}
             alt="A black and white image of an afro caribean woman. AI generated."
           />

           <StyledOpacity>
             <StyledCaseContents>
               <Styledp>
                AI Beauty concept
               </Styledp>
             </StyledCaseContents>
           </StyledOpacity>
      </StyledCaseMain>
    </StyledWrapper>

<StyledWrapper>
<StyledCaseMain >
<StyledVideo
          src={Film}
          autoPlay
          loop
          muted
          playsInline
          alt="AI News headlines by an AI avatar."
        />
        <StyledOpacity>
          <StyledCaseContents>
            <Styledp>AI Avatar - AI News Anchor for AI News Reel</Styledp>
          </StyledCaseContents>
        </StyledOpacity>
          
        </StyledCaseMain>
</StyledWrapper>
</StyledGridContainer>
  );
};

export default Tech;

