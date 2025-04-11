import React from "react";
import styled from "styled-components";

const StyledGridContainer = styled.div`
display: grid;
grid-template-areas: 
"copy copy"
"video video";
 padding-top: 16px;
 padding-bottom: 20px;
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

const StyledLink = styled.a`
  width: 70%;
  align-self: center;
  color: #277DEE;
  font-size: 18px;
  text-align: center;
  margin-top: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 960px) {
    font-size: 16px;
    padding-top: 20px;
  }
`;


const LinkContainer = styled.div`
grid-area: copy;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.2rem;
  overflow: hidden;
  text-align: center;
  padding-top: 36px;
  /* padding-bottom: 60px;  */
  /* padding-left: 16px; */

  /* Slide-in animation */
  transform: translateX(-100%); 
  animation: slideIn 1s ease-out forwards; 

  @media (max-width: 960px) {
    width: 90%;
    align-items: center;
    /* min-height: 250px; */
    padding-top: 0px;
    padding-bottom: 40px; 
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
    /* min-height: 140px; */
  }
`;














const Commercials = () => {
 
  return (
    <StyledGridContainer>
      <StyledCopy>
       
      <h3>Commercial and Social Media Work </h3>

       <StyledText>
       As a Director of Photography, I’ve worked on a range of commercial and social content for major brands including 
       Volvo, Gant, H&M, IKEA, Stadium, Burger King, Fruit-Tella, Call of Duty, Honda and Renault. 
       I enjoy the pace and energy of this kind of work, collaborating with creative teams to capture visually strong and emotionally loaded campaigns.
       
       </StyledText>

       <LinkContainer>
       <StyledLink href="https://www.paulevans-dop.com/" target="_blank" rel="noopener noreferrer">
       See more commercial work →
       </StyledLink>
       </LinkContainer>
      

     </StyledCopy>
  
</StyledGridContainer>
  );
};

export default Commercials;

