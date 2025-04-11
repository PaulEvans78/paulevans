import React from "react";
import styled from "styled-components";
import Img from "/MeAbout.png";

const StyledGridContainer = styled.div`
display: grid;
grid-template-areas: 
"copy copy"
"image image";
 padding-top: 16px;
 padding-bottom: 70px;
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
  padding-bottom: 60px; 

  /* Slide-in animation */
  transform: translateX(-100%); 
  animation: slideIn 1s ease-out forwards; 

  @media (max-width: 960px) {
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
    width: 15%;
    /* height: 100%; */
  object-fit: cover; 
  border-radius: 6px;

  @media (max-width: 960px) {
    width: 20%;
  }

  @media (max-width: 768px) {    
    width: 40%;
  }
`;












const AboutMe = () => {
 
  return (
    <StyledGridContainer>



      <StyledCopy>
       
<h3>About Me </h3>

       <StyledText>
       I bring a unique blend of creative and technical skills, shaped by years of experience across film, advertising, UX/UI, and frontend development. 
       Whether I'm crafting narratives behind the camera or designing digital experiences, I approach each project with curiosity, clarity, 
       and a collaborative spirit.
       </StyledText>
      

     </StyledCopy>

     <StyledWrapper>
     <StyledCaseMain >
                <StyledImg
                  src={Img}
                  alt="A photo of Paul Evans."
                />
     
               
             </StyledCaseMain>
     </StyledWrapper>
    
</StyledGridContainer>
  );
};

export default AboutMe;

