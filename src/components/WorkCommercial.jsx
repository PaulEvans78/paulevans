import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Modal from "./modal";


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
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/lawnman.png"
              alt="a man made of grass looks to the sky.."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Lawn Man </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/grandiosa.png"
              alt="A elderly man plays a VR game with his grandchildren behind him"
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Grandiosa </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/stadium.png"
              alt="A female athlete walks way from us carrying her shoes."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Stadium Running </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

       <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/boxer.png"
              alt="Boxer robbert is bound to a pole by a large fire. Indiana Jones style."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Boxer </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/aller.png"
              alt="A young woman eats a pink macaroon against a pink background."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Aller Media </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/stadiumSneakers.png"
              alt="A young man dances on a roof in Los Angeles."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Stadium Sneakers </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/cod.png"
              alt="A secret service agent operates a lie detector."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Call of Duty - Black ops </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/fruitTella.png"
              alt="A mother sits on a park bench as her son takes a sweet form her."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Fruit-Tella </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/ikea.png"
              alt="An Ikea soft toy looks at us."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Ikea </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/volvo.png"
              alt="A volvo tyre makes it way through a snow storm."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Volvo tyres </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="linda" onClick={() => openModal("linda")}>
            <StyledImg
              src="/kry.png"
              alt="A mans hand holds up a number, waiting his turn to see the doctor."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Kry </Styledp>
              </StyledCaseContents>
            </StyledOpacity>
          </StyledCaseMain>
        </StyledWrapper>

        <StyledWrapper>
          <StyledCaseMain key="gina" onClick={() => openModal("gina")}>
            <StyledImg
              src="/gant2.png"
              alt="A man in Gant trousers and jacket sits on a bench in a modern building with a large window and forest behind."
              loading="eager"
            />

            <StyledOpacity>
              <StyledCaseContents>
                <Styledp>Gant Diamond G</Styledp>
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
