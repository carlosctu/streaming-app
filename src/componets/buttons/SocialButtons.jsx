import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.jpg";
import { ButtonContainer } from "./ButtonContainer";
import styled from "styled-components";

export default function SocialButtons() {
  const socialButtons = [
    {
      description: "Continue with Google",
      logoSrc: google,
      logoAlt: "google-login",
      onClick: () => { }
    },
    {
      description: "Continue with Facebook",
      logoSrc: facebook,
      logoAlt: "facebook-login",
      onClick: () => { }

    },
    {
      description: "Continue with Github",
      logoSrc: github,
      logoAlt: "github-login",
      onClick: () => redirectToGithub()

    },
  ];

  function redirectToGithub() {
    const GITHUB_URL = 'https://github.com/login/oauth/authorize';
    const authURL = `${GITHUB_URL}?client_id=${import.meta.env.VITE_GITHUB_ID}`;
    window.location.href = authURL;
  }

  return (
    <ButtonsWrapper>
      {socialButtons.map((btn, index) => (
        <ButtonContainer
          key={index}
          description={btn.description}
          logoSrc={btn.logoSrc}
          logoAlt={btn.logoAlt}
          backgroundColor={btn.backgroundColor}
          onClick={btn.onClick}
        />
      ))}
    </ButtonsWrapper>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;
