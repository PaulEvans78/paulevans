import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AiBadgeIcon from "/ai_icon.jpg";

const mediaItems = [
  { src: "/allerPrintSummer.jpg", label: "Aller Print Summer" },
  { src: "/katyPerryRoar.jpg", label: "Katy Perry ROAR" },
  { src: "/gant.png", label: "Gant Diamond G" },
  { src: "/landroverConcept.gif", label: "Land Rover Concept (AI)", isAI: true },
];

const MasonryWrapper = styled.div`
  column-count: 1;
  column-gap: 16px;
  padding-top: 16px;
  padding-bottom:0;

  @media (min-width: 768px) {
    column-count: 2;
    padding: 16px 0;
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

const MasonryGrid = () => {
  const [visibleItems, setVisibleItems] = useState(mediaItems);
  
    useEffect(() => {
      const handleResize = () => {
        const isMobile = window.innerWidth <= 960;
        const filtered = isMobile
          ? mediaItems.filter(
              (item) => !item.src.includes("landroverConcept.gif")
            )
          : mediaItems;
        setVisibleItems(filtered);
      };
  
      handleResize(); // initial check
      window.addEventListener("resize", handleResize); // update on resize
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  return (
    <MasonryWrapper>
      {visibleItems.map(({ src, label, isAI }, index) => (
        <MasonryItem key={index}>
          <HoverOverlay>
            {src.endsWith(".mp4") || src.endsWith(".mov") ? (
              <StyledVideo src={src} autoPlay loop muted playsInline />
            ) : (
              <StyledImage src={src} alt={`media-${index}`} />
            )}
            {isAI && <AIBadge src={AiBadgeIcon} alt="AI-generated icon" />}
            <Overlay className="overlay" />
            <TextOverlay className="label">{label}</TextOverlay>
          </HoverOverlay>
        </MasonryItem>
      ))}
    </MasonryWrapper>
  );
};

export default MasonryGrid;
