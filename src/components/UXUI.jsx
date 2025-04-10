import React from "react";
import styled from "styled-components";
import Img from "/tools.png";

const StyledGridContainer = styled.div`
display: grid;
grid-template-areas: 
"copy copy"
"image image";
 padding-top: 16px;
 padding-bottom: 60px;
gap: 16px;
  width: 100%;
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
  /* padding-bottom: 60px;  */
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

const StyledWrapper = styled.div`
grid-area: image;
  display: flex;
  width: 100%;
  max-width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  overflow: hidden;
  border-radius: 6px;
`;

const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  /* aspect-ratio: 16 / 9; */
  width: 100%;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 6px;
  transition: transform 1s ease-in-out;
  cursor: pointer;
`;

const StyledImg = styled.img`
    width: 80%;
    /* height: 100%; */
  object-fit: cover; 
  border-radius: 6px;
`;












const UxUi = () => {
 
  return (
    <StyledGridContainer>



      <StyledCopy>
       
<h2>UX/UI & Frontend</h2>

       <StyledText>
       In the digital space, I’ve worked with design tools like Figma, Adobe Creative Suite, and Useberry for testing and prototyping. 
       I’m skilled in HTML, CSS, JavaScript, and React, and I enjoy building intuitive, visually appealing user experiences.
       example is a landing page I created for LipusPlus, designed to build brand awareness and communicate their value clearly through 
       clean design and thoughtful interactions.
       </StyledText>
      

     </StyledCopy>
    
    <StyledWrapper>
         <StyledCaseMain >
                    <StyledImg
                      src={Img}
                      alt="Logos for Figma, Adobe, Useberry, HTML, CSS, Javascript, React and Webflow"
                    />
         
                   
                 </StyledCaseMain>
         </StyledWrapper>

</StyledGridContainer>
  );
};

export default UxUi;

