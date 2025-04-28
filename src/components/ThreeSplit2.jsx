import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Film from "/Food.mp4";
import Img3 from "/GaelPatrik.jpg";
import Img4 from "/hellyHansen.jpg";
import AiBadgeIcon from "/ai_icon.jpg";
import Modal from "./modal";


const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  height: auto;
  aspect-ratio: 16 / 9;
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
    background: linear-gradient(
      to top,
      rgba(10, 10, 10, 0.6) 0%,
      transparent 30%
    );
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

const AIBadge = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  z-index: 3;
  background-color: white;
  border-radius: 50%;
  padding: 2px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const FourSplitCard = () => {

  const [selectedId, setSelectedId] = useState(null);
  
  const openModal = (assetId) => {
    setSelectedId(assetId);
  };
  
  const closeModal = () => {
    setSelectedId(null);
  };
  
  
  useEffect(() => {
    if (selectedId) {
      // Lock scroll
      document.body.style.overflow = "hidden";
    } else {
      // Unlock scroll
      document.body.style.overflow = "auto";
    }
  
    // Clean up if component unmounts while modal is open
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedId]);

  return (
    <>
    <StyledGridContainer>
      <StyledWrapper>
        <StyledCaseMain key="aiFood" onClick={() => openModal("aiFood")}>
          <StyledVideo
            playsInline
            autoPlay
            muted
            loop
            preload="auto"
            src={Film}
          />
<AIBadge src={AiBadgeIcon} alt="AI generated content" />
          <StyledOpacity>
            <StyledCaseContents>
              <Styledp>Proof of Concept - AI Foods</Styledp>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </StyledWrapper>

      <StyledWrapper>
        <StyledCaseMain key="gael" onClick={() => openModal("gael")}>
          <StyledImg
            src={Img3}
            alt="From behind we see a man, bare chested. With a large leather coat wrapped around him."
            loading="eager"
          />

          <StyledOpacity>
            <StyledCaseContents>
              <Styledp>Gael x Patrik Fashion Project</Styledp>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </StyledWrapper>

      <StyledWrapper>
        <StyledCaseMain key="helly" onClick={() => openModal("helly")}>
          <StyledImg
            src={Img4}
            alt="A Yacht sails torwards a sunset, With the Helly Hansen logo."
            loading="eager"
          />

          <StyledOpacity>
            <StyledCaseContents>
              <Styledp>Helly Hansen</Styledp>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </StyledWrapper>
    </StyledGridContainer>

    {selectedId && (
  <Modal caseId={selectedId} onClose={closeModal} />
)}
    </>
  );
};

export default FourSplitCard;
