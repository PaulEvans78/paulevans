import styled from "styled-components";


const StyledContentsContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  padding: 0em 1em 0em 1em;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8em 0em 0.5em 0em;
  }
  @media (max-width: 767px) {
    padding: 4em 0em 4em 0em;
  }
`;

const StyledCopy = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.2rem;
  overflow: hidden;
  text-align: center;
  padding-top: 120px;
  padding-bottom: 120px; 

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


const Styledp = styled.p`
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

  @media (max-width: 767px) {
    width: 100%;
    font-size: 16px;
  }
`;


const Copy = () => {
  
  return (
    <StyledContentsContainer>
      <StyledCopy>
       


        <Styledp>
        My creative experience is supported by data analysis, trend tracking, and A/B testing, 
        which help shape content strategies and deliver measurable results. 
        I stay current with the latest generative AI tools and workflows, 
        enabling me to quickly develop visual concepts and streamline production while maintaining a balance of efficiency and creativity.
        </Styledp>
       

      </StyledCopy>
     
    </StyledContentsContainer>
  );
};



export default Copy;
