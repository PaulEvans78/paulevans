import React, { useEffect, useState } from "react";
import styled from "styled-components";

const allMediaItems = [
  { src: "/lipusPlus.jpg", label: "LipusPlus" },
  { src: "/stadiumRunning.jpg", label: "Stadium Running" },
  { src: "/stadiumSneakers.mp4", label: "Stadium Sneakers" },
  { src: "/Beauty.mp4", label: "AI Beauty Concept" },
  { src: "/Avatar_May_TheElectricState.mp4", label: "AI Avatar - May Rosengren for AI News Reel" },
  { src: "/sns_singles_day.gif", label: "SNS Singles Day (AI)" },
];

const MasonryWrapper = styled.div`
  column-count: 1;
  column-gap: 16px;
  padding: 16px 0;

  @media (min-width: 768px) {
    column-count: 2;
  }

  @media (min-width: 1024px) {
    column-count: 3;
  }
`;

const MasonryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .label {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 960px) {
    &:hover .overlay,
    &:hover .label {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HoverOverlay = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 8px;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  z-index: 1;

  @media (max-width: 960px) {
    opacity: 1;
    background: linear-gradient(to top, rgba(10, 10, 10, 0.6) 0%, transparent 30%);
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 2;

  @media (max-width: 960px) {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MasonryGrid = () => {
  const [visibleItems, setVisibleItems] = useState(allMediaItems);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 960;
      const filtered = isMobile
        ? allMediaItems.filter(
            (item) => !item.src.includes("AR_Fashion_Experience__AR_Fashion_Experience.gif")
          )
        : allMediaItems;
      setVisibleItems(filtered);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MasonryWrapper>
      {visibleItems.map(({ src, label }, index) => (
        <MasonryItem key={index}>
          <HoverOverlay>
            {src.endsWith(".mp4") || src.endsWith(".mov") ? (
              <StyledVideo src={src} autoPlay loop muted playsInline />
            ) : (
              <StyledImage src={src} alt={`media-${index}`} />
            )}
            <Overlay className="overlay" />
            <TextOverlay className="label">{label}</TextOverlay>
          </HoverOverlay>
        </MasonryItem>
      ))}
    </MasonryWrapper>
  );
};

export default MasonryGrid;