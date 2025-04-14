import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const footerData = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/paul-evans-3a74605/",
    icon: <FaLinkedin />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];


const StyledContentsContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  padding: 4em 1em 3em 1em;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 6em 1em 3em 1em;
  }

  @media (max-width: 767px) {
    padding: 6em 0em 0.5em 0em;
  }

  @media (max-width: 548px) {
    padding: 4em 0em 0.5em 0em;
  }
`;

const StyledIntro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
  font-size: 1.2rem;
  overflow: hidden;
  text-align: center;
  padding-top: 70px; 

  /* Slide-in animation */
  transform: translateX(-100%); 
  animation: slideIn 1s ease-out forwards; 

  @media (max-width: 960px) {
    /* width: 90%; */
    align-items: center;
    min-height: 300px;
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
`;



const Styledp = styled.p`
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

  @media (max-width: 767px) {
    width: 100%;
    font-size: 16px;
  }
`;

const StyledIconp = styled.p`
  align-self: center;
  color: var(--main-p-color);
  font-size: 14px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2em;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  padding-top: 1em;

  @media screen and (max-width: 960px) {
    padding-top: 2em;
    margin-left: 0em;
  }

  @media screen and (max-width: 478px) {
    flex-direction: column;
    margin-right: 0em;
  }
`;

const StyledIcon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 1em 0em 1em;
  color: #277DEE;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }

  @media screen and (max-width: 767px) {
    margin: 0em 2em 0em 2em;
  }
`;

const IconDes = styled.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 12px;
  line-height: 18px;
  color: var(--main-font-color);
  text-align: center;
  margin-top: 0em;
  

  &:hover {
    color: var(--main-button-hover-color);
  }

  @media screen and (max-width: 960px) {
    &:hover {
      color: inherit;
    }
  }
`;



const Hero = () => {
  
  return (
    <StyledContentsContainer>
      <StyledIntro>
        <Styledp>
        I design story-driven content that connects, shaped by my experience in film and television, advertising, UX/UI, and frontend development. 
        Whether I’m developing concepts, leading creative teams, or bringing ideas to life, I focus on work that’s visually strong, strategically grounded, 
        and true to the brand. With a focus on emerging technology and a hands-on approach, I bring vision, execution, and results.
        </Styledp>
        <Icons />
        <StyledIconp>
          Connect on LinkedIn
        </StyledIconp>

      </StyledIntro>
     
    </StyledContentsContainer>
  );
};

const Icons = () => {
  return (
    <IconContainer>
      <IconContext.Provider value={{ size: "2.5em" }}>
        {footerData.map((Link) => (
          <StyledIcon
            href={Link.href}
            key={Link.id}
            target={Link.target}
            rel={Link.rel}
          >
            {Link.icon}

            <IconDes>{Link.des}</IconDes>
          </StyledIcon>
        ))}
      </IconContext.Provider>
    </IconContainer>
  );
};

export default Hero;
