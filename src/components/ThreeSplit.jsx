import React from "react";
import Film from "/thisIsSweden.mp4";
import Img1 from "/xperiaLindaP2.gif";
import Img2 from "/ginaTricot.jpg";
import Img from "/stadiumRunning.jpg";
import styled from "styled-components";

const StyledGridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 16px;
width: 100%;

@media (max-width: 960px) {
  grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
  grid-template-columns: 1fr;
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

const StyledSmallDevicesWrapper = styled.div`
  display: none;
  width: 100%;
  max-width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  overflow: hidden;
  border-radius: 6px;

  @media (max-width: 960px) {
  display: flex;
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
  bottom: 0px;
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
  height: auto;
  aspect-ratio: 16 / 9;
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

const ThreeSplitCard = () => {
 
  return (
    <StyledGridContainer>
    <StyledWrapper>
      <StyledCaseMain>
        <StyledVideo
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          src={Film}
          alt="A short version from This is Sweden."
        />

        <StyledOpacity>
          <StyledCaseContents>
            <Styledp>This is Sweden</Styledp>
          </StyledCaseContents>
        </StyledOpacity>
      </StyledCaseMain>
    </StyledWrapper>


<StyledWrapper>
<StyledCaseMain >
           <StyledImg
             src={Img1}
             alt="Linda Pirra floats mid air in front of a high rise."
           />

           <StyledOpacity>
             <StyledCaseContents>
               <Styledp>
                Linda Pirra
               </Styledp>
             </StyledCaseContents>
           </StyledOpacity>
        </StyledCaseMain>
</StyledWrapper>

<StyledSmallDevicesWrapper>
<StyledCaseMain >
           <StyledImg
             src={Img}
             alt="A young woman crouches looking over Los Angeles from a view point."
           />

           <StyledOpacity>
             <StyledCaseContents>
               <Styledp>
                Stadium Running
               </Styledp>
             </StyledCaseContents>
           </StyledOpacity>
        </StyledCaseMain>
</StyledSmallDevicesWrapper>

<StyledWrapper>
<StyledCaseMain >
           <StyledImg
             src={Img2}
             alt="A young woman dances behind graphics for Gina Tricot."
           />

           <StyledOpacity>
             <StyledCaseContents>
               <Styledp>
                Gina Tricot
               </Styledp>
             </StyledCaseContents>
           </StyledOpacity>
        </StyledCaseMain>
</StyledWrapper>

</StyledGridContainer>
  );
};

export default ThreeSplitCard;



