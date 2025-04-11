import React from "react";
import Img from "/meSnow.png";
import Img2 from "/sriLanka.jpg";
import styled from "styled-components";

const StyledGridContainer = styled.div`
display: grid;
grid-template-areas: 
"copy copy"
"video video";
 padding-top: 16px;
 padding-bottom: 100px;
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
    width: 80%;
    font-size: 16px;
  }

  @media (max-width: 768px) {    
    width: 100%;
  }
`;







const StyledImg = styled.img`
    width: 100%;
    height: 100%;
  object-fit: cover; 
  border-radius: 6px;
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
 

`;

const OutsideWork = () => {
 
  return (
    <StyledGridContainer>
      <StyledCopy>
       
      <h3>Life Outside Work </h3>

       <StyledText>
       Surfing, snowboarding and traveling are my biggest passions. When I’m not paddling out into the waves, you’ll probably find me at the gym, 
       swimming in the lake, or cooking for family and friends. 
       </StyledText>
       <StyledText>
      I’m calm and methodical by nature, which helps me handle challenges with clarity and ease. Working with people from different backgrounds and generations gives me a sense of purpose—and I find it endlessly energising and inspiring.
       </StyledText>
      

     </StyledCopy>
    <StyledWrapper>
      <StyledCaseMain>
      <StyledImg
             src={Img}
             alt="Paul Evans taking in the view whilst snowboarding in Chamonix"
           />

           
      </StyledCaseMain>
    </StyledWrapper>

<StyledWrapper>
<StyledCaseMain >
           <StyledImg
             src={Img2}
             alt="One of Paul Evans's most favorite places, Sri Lanka."
           />

           
        </StyledCaseMain>
</StyledWrapper>
</StyledGridContainer>
  );
};

export default OutsideWork;

