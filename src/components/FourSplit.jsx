import React from "react";
import Img1 from "/grandiosa.jpg";
import Img2 from "/newBalanceImg.jpg";
import Img3 from "/tracyTrackers.jpg";
import Film2 from "/viagraBoys.mp4";
import styled from "styled-components";

const StyledGridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 16px;
  width: 100%;

  @media (max-width: 960px) {
  grid-template-columns: 1fr 1fr;
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

const FourSplitCard = () => {
 
  return (
    <StyledGridContainer>
    <StyledWrapper>
      <StyledCaseMain>
      <StyledImg
             src={Img1}
             alt="A young woman looks into an oven."
             
           />

        <StyledOpacity>
          <StyledCaseContents>
            <Styledp>Grandiosa</Styledp>
          </StyledCaseContents>
        </StyledOpacity>
      </StyledCaseMain>
    </StyledWrapper>

<StyledWrapper>
<StyledCaseMain >
           <StyledImg
             src={Img2}
             alt="Red inner soles from New Balance trainers."
             
           />

           <StyledOpacity>
             <StyledCaseContents>
               <Styledp>
                New Balance
               </Styledp>
             </StyledCaseContents>
           </StyledOpacity>
        </StyledCaseMain>
</StyledWrapper>

<StyledWrapper>
<StyledCaseMain >
           <StyledImg
             src={Img3}
             alt="A white dog in a bomber jacket."
           />

           <StyledOpacity>
             <StyledCaseContents>
               <Styledp>
                Tracy Trackers
               </Styledp>
             </StyledCaseContents>
           </StyledOpacity>
        </StyledCaseMain>
</StyledWrapper>

<StyledWrapper>
<StyledCaseMain >
<StyledVideo
          src={Film2}
          autoPlay
          loop
          muted
          playsInline
          alt="A short version of Viagra boys video Sports."
        />

           <StyledOpacity>
             <StyledCaseContents>
               <Styledp>
                Viagra Boys - Sports
               </Styledp>
             </StyledCaseContents>
           </StyledOpacity>
        </StyledCaseMain>
</StyledWrapper>

</StyledGridContainer>
  );
};

export default FourSplitCard;



