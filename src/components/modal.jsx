import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { casesData } from "../cases";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.782);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  @media (max-width: 960px) {
  }
`;

const ModalContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr auto;
  gap: 16px;
  width: 100vw;
  height: 100vh;
  /* height: calc(var(--vh, 1vh) * 100); */
  background: white;
  border-radius: 6px;
  overflow: hidden;
  position: relative;

  padding-top: env(safe-area-inset-top);

  @media (max-width: 960px) {
    width: 100vw;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    border-radius: 0px;
    height: auto;
    max-height: 100vh;
    overflow-y: auto;
  }
  @media (max-width: 768px) and (orientation: portrait) {
    padding-top: calc(80px + env(safe-area-inset-top));
  }

  @media (max-width: 768px) and (orientation: landscape) {
    margin-top: 80px;
  }
`;

const AssetWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    height: auto;
    max-height: 100vh;
  }
`;

const AssetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 6px;
`;

const AssetVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${({ aspectRatio }) => {
    if (aspectRatio === "1:1") return "100%";
    if (aspectRatio === "16:9") return "56.25%";
    return "56.25%";
  }};
  height: 0;
  overflow: hidden;

  @media (max-width: 960px) and (orientation: landscape) {
    height: 100vh;
    max-height: 100vh;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    padding-top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const AssetVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 6px;

  @media (max-width: 960px) {
    border-radius: 0px;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    position: relative;
    height: auto;
    max-height: 100vh;
    object-fit: contain;
  }
`;

const TextWrapper = styled.div`
  margin-top: 80px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    margin-top: 0px;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const Copy = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
  padding-bottom: 20px;
`;

const AccompanyingAssets = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 100%;
  bottom: 110px;
  overflow-y: auto;
`;

const AccompanyingAsset = styled.img`
  width: 45%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.977);
  color: white;
  font-size: 2rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const NavArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  ${({ direction }) => (direction === "left" ? "left: 10px;" : "right: 10px;")}

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const Modal = ({ onClose, caseId }) => {
  const [currentId, setCurrentId] = useState(caseId);

  useEffect(() => {
    setCurrentId(caseId);
  }, [caseId]);

  const currentIndex = casesData.findIndex((item) => item.id === currentId);
  const caseItem = casesData[currentIndex];

  if (!caseItem) return null;

  const getAspectRatio = (src) => {
    const videoElement = document.createElement("video");
    videoElement.src = src;
    return new Promise((resolve) => {
      videoElement.onloadedmetadata = () => {
        const width = videoElement.videoWidth;
        const height = videoElement.videoHeight;
        const aspectRatio = width / height;
        if (aspectRatio === 1) {
          resolve("1:1");
        } else if (aspectRatio === 16 / 9) {
          resolve("16:9");
        } else {
          resolve("custom");
        }
      };
    });
  };

  const [aspectRatio, setAspectRatio] = useState("");

  useEffect(() => {
    if (caseItem.type === "video") {
      getAspectRatio(caseItem.src).then((ratio) => setAspectRatio(ratio));
    }
  }, [caseItem]);

  const goPrev = () => {
    const newIndex = (currentIndex - 1 + casesData.length) % casesData.length;
    setCurrentId(casesData[newIndex].id);
  };

  const goNext = () => {
    const newIndex = (currentIndex + 1) % casesData.length;
    setCurrentId(casesData[newIndex].id);
  };

  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <AssetWrapper>
          <NavArrow direction="left" onClick={goPrev}>
            ‹
          </NavArrow>
          {caseItem.type === "video" ? (
            <AssetVideoWrapper aspectRatio={aspectRatio}>
              <AssetVideo
                playsInline
                autoPlay
                controls
                loop
                src={caseItem.src}
              />
            </AssetVideoWrapper>
          ) : (
            <AssetImage src={caseItem.src} alt={caseItem.title} />
          )}
          <NavArrow direction="right" onClick={goNext}>
            ›
          </NavArrow>
        </AssetWrapper>

        <TextWrapper>
          <Title>{caseItem.title}</Title>
          <Copy>
            {caseItem.description || "Opps, I forgot to add a description."}
          </Copy>

          <AccompanyingAssets>
            {caseItem.accompanyingAssets &&
              caseItem.accompanyingAssets.map((asset, index) => (
                <AccompanyingAsset
                  key={index}
                  src={asset}
                  alt={`Accompanying Asset ${index + 1}`}
                />
              ))}
          </AccompanyingAssets>
        </TextWrapper>

        <CloseButton onClick={onClose}>×</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
