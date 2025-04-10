import React from "react";
import styled from "styled-components";

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding-top: 16px;
  padding-bottom: 50px;
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


const StyledIframe = styled.iframe`
  width: 90%;
  height: 90%;
  border-radius: 6px;
  object-fit: cover;
`;


const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 6px;
  transition: transform 1s ease-in-out;
  cursor: pointer;
`;

const MusicVideos = () => {
  return (
    <StyledGridContainer>
      <StyledCopy>
        <h2>Ghost - Hunter's Moon </h2>

        <StyledText>
        Music videos remain one of the most creative formats, I have been lucky enough to work with Artists like Katy Perry, Eagle Eye Cherry and MØ. 
        Yet one of my favorite projects was shooting the music video for Ghost’s track Hunter’s Moon, 
        which plays during the end credits of Halloween Kills. Shot under tight deadlines and budget constraints, 
        the video was a creative challenge that paid off—it’s now reached over 10 million views on YouTube.
        </StyledText>
      </StyledCopy>
      <StyledWrapper>
        <StyledCaseMain>
        <StyledIframe
  src="https://www.youtube.com/embed/rtkaUZvMaG8?autoplay=1&mute=1&loop=1&playlist=rtkaUZvMaG8"
  title="Ghost - Hunter's Moon"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

          
        </StyledCaseMain>
      </StyledWrapper>
    </StyledGridContainer>
  );
};

export default MusicVideos;
