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














const Concept = () => {
 
  return (
    <StyledGridContainer>



      <StyledCopy>
       
<h2>Concept Development </h2>

       <StyledText>
       I also work on the development side - writing original ideas for film and television, both independently and in collaboration with other creatives.
      I’ve pitched and sold concepts, written from briefs, and worked closely with teams at companies like FLX and SVT to develop stories that resonate 
      with audiences. Storytelling remains at the core of everything I do.
       </StyledText>
      

     </StyledCopy>
    
</StyledGridContainer>
  );
};

export default Concept;

