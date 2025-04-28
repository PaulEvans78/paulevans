import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { casesData } from "../cases"; 

// Styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr auto;
  gap: 16px;
  width: 100vw;
  height: 100vh;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  @media (max-width: 960px) {
    width: 100vw;
    /* height: 100vh; */
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    /* padding-top: 80px; */
  }
  @media (max-width: 720px) {
    padding-top: 80px;
  }
`;

const AssetWrapper = styled.div`
  position: relative;
  align-content: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-top: 20px;
  overflow: hidden;

  @media (max-width: 960px) {
    padding-left: 0px;
    align-content: flex-start;
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ aspectRatio }) => {
    if (aspectRatio === "1:1") {
      return `
        padding-top: 100%;  /* Keeps aspect ratio 1:1 */
        height: 0;
      `;
    }
    if (aspectRatio === "16:9") {
      return `
        padding-top: 56.25%;  /* 16:9 aspect ratio */
        height: 0;
      `;
    }
  }}
`;

// const AssetVideo = styled.video`
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
//   border-radius: 6px;
// `;

const AssetVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* This ensures that the video fills the container without distorting */
  border-radius: 6px;
`;

const TextWrapper = styled.div`
  margin-top: 60px;
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
`;



const AccompanyingAssets = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 100%;
  bottom: 110px;
  /* max-height: 20%; */
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
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.977);
  color: white;
  font-size: 2rem;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;

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

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  ${({ direction }) =>
    direction === "left" ? "left: 30px;" : "right: 10px;"}

@media (max-width: 960px) {
  top: 45%;
  ${({ direction }) =>
    direction === "left" ? "left: 10px;" : "right: 10px;"}
  }

  @media (max-width: 720px) {
  top: 40%;
  }

  @media (max-width: 580px) {
  top: 35%;
  }

  @media (max-width: 450px) {
  top: 30%;
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

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <AssetWrapper>
        <NavArrow direction="left" onClick={goPrev}>‹</NavArrow>
        {caseItem.type === "video" ? (
           <AssetVideoWrapper aspectRatio={aspectRatio}>
  <AssetVideo playsInline autoPlay controls loop src={caseItem.src} />
  </AssetVideoWrapper>
) : (
  <AssetImage src={caseItem.src} alt={caseItem.title} />
)}
<NavArrow direction="right" onClick={goNext}>›</NavArrow>
        </AssetWrapper>

        <TextWrapper>
          <Title>{caseItem.title}</Title>
          <Copy>{caseItem.description || "Opps, I forgot to add a description."}</Copy>
        
          

          <AccompanyingAssets>
            {caseItem.accompanyingAssets &&
              caseItem.accompanyingAssets.map((asset, index) => (
                <AccompanyingAsset key={index} src={asset} alt={`Accompanying Asset ${index + 1}`} />
              ))}
          </AccompanyingAssets>
        </TextWrapper>

        <CloseButton onClick={onClose}>×</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
