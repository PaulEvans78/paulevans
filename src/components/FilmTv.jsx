import React from "react";
import Img from "/viForever.png";
import styled from "styled-components";

const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 16px;
  padding-bottom: 100px;
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 60px;
  }
`;

const StyledMediaRow = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledWrapper = styled.div`
  flex: 1;
  aspect-ratio: 16 / 9;
  max-width: 600px;
  width: 100%;
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
    font-size: 16px;
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
`;

const StyledLink = styled.a`
  width: 70%;
  align-self: center;
  color: #277dee;
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

  transform: translateX(-100%);
  animation: slideIn 1s ease-out forwards;

  @media (max-width: 960px) {
    width: 90%;
    align-items: center;

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
`;

const FilmTv = () => {
  return (
    <StyledGridContainer>
      <StyledCopy>
        <h3>Film and Television </h3>

        <StyledText>
          My background in film and TV has been a constant source of
          inspiration. I am a member of the FsF (Swedish Association of
          Cinematographers) and have worked on titles such as The Last Journey
          of the Vikings (Viaplay), a historical docudrama now being sold
          internationally. And Vi Forever (SVT), a youth series that continues
          to engage audiences in Sweden.
        </StyledText>

        <LinkContainer>
          <StyledLink
            href="https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDB Profile →
          </StyledLink>
        </LinkContainer>
      </StyledCopy>

      <StyledMediaRow>
        <StyledWrapper>
          <StyledIframe
            src="https://www.youtube.com/embed/xQGE3Qkw82U?autoplay=1&mute=1&loop=1&playlist=xQGE3Qkw82U"
            title="Ghost - Hunter's Moon"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </StyledWrapper>

        <StyledWrapper>
          <a
            href="https://www.svtplay.se/vi-forever"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg src={Img} alt="The poster for Vi Forever." />
          </a>
        </StyledWrapper>
      </StyledMediaRow>
    </StyledGridContainer>
  );
};

export default FilmTv;
