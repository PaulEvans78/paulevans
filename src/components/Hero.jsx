import styled from "styled-components";
import Img from "/heroImage.jpg";

const StyledContentsContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  /* padding: 0em 1em 3em 1em; */

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 767px) {
    padding: 6em 0em 0.5em 0em;
  }

  @media (max-width: 548px) {
    padding: 4em 0em 0.5em 0em;
  }
`;

const StyledContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 560px; */
  aspect-ratio: 21/9;
  /* min-height: 450px; */
  font-size: 1.2rem;
  overflow: hidden;
  text-align: center;
  /* padding-top: 70px; */

  /* Slide-in animation */
  transform: translateX(-100%);
  animation: slideIn 1s ease-out forwards;

  @media (max-width: 960px) {
    /* width: 90%; */
    align-items: center;
    /* min-height: 400px; */
    padding: 0em 0em 1em 0em;
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
    aspect-ratio: 3/5;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 21/9;
  object-fit: cover;
  /* border-radius: 6px; */

  @media (max-width: 767px) {
    aspect-ratio: 3/5;
  }
`;


const StyledTitle = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  text-align: center;
  z-index: 2; /* make sure it's on top of the image */


`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2));
  z-index: 1;
  /* border-radius: 6px; */
`;



const Hero = () => {
  return (
    <StyledContentsContainer>
      <StyledContents>
        {/* <StyledOverlay> */}
        <StyledImg
          src={Img}
          alt="A girl dancing on the rooftops of Los Angeles."
        />
         <StyledOverlay />
        {/* </StyledOverlay> */}
        <StyledTitle>
          <h1>Paul Evans</h1>
          <h2>Content Designer </h2>
        </StyledTitle>
      </StyledContents>
    </StyledContentsContainer>
  );
};

export default Hero;
