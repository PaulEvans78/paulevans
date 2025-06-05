import React, { useState, useEffect } from "react";

import Modal from "./modal";

import styled from "styled-components";



const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
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

const StyledSmallDevicesWrapper = styled.div`
  display: none;
  width: 100%;
  max-width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  overflow: hidden;
  border-radius: 6px;

  @media (max-width: 960px) {
    display: flex;
  }
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

const ThreeSplitCard = () => {
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
          <StyledCaseMain key="ghost" onClick={() => openModal("ghost")}>
            <StyledImg
              src="/ghost.png"
              alt="a boy in a mask. Scary horror feeling"
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Ghost - Hunters Moon </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="darin" onClick={() => openModal("darin")}>
            <StyledImg
              src="/darin.png"
              alt="Darin in a blue suit against a pink background."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Darin </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="vBoys" onClick={() => openModal("vBoys")}>
            <StyledImg
              src="/ViagraBoys.png"
              alt="A stylised inside tennis hall with the empire watching as a tattooed man sits on a bench."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Viagra Boys - Sports </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

       <StyledWrapper>
          <StyledCaseMain key="babyBlue" onClick={() => openModal("babyBlue")}>
            <StyledImg
              src="/katyP.png"
              alt="Katy Perry burning her blue wig."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Katy Perry </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="eagleEye" onClick={() => openModal("eagleEye")}>
            <StyledImg
              src="/eagleEye.png"
              alt="Eagle Eye Cherry driving a bus."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Eagle Eye Cherry</Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="mo" onClick={() => openModal("mo")}>
            <StyledImg
              src="/mo.png"
              alt="MØ biting a gold chain in the dessert."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>MØ </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

    
      </StyledGridContainer>

      {selectedId && <Modal caseId={selectedId} onClose={closeModal} />}
    </>
  );
};

export default ThreeSplitCard;
