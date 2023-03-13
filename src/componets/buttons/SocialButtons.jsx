import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.jpg";
import { ButtonContainer } from "./ButtonContainer";
import styled from "styled-components";
import { handleFacebookSignIn, handleGithubSignIn, handleGoogleSignIn } from "../../services/firebase/FirebaseAuth";


export default function SocialButtons() {
  const socialButtons = [
    {
      description: "Continue with Google",
      logoSrc: google,
      logoAlt: "google-login",
      onClick: () => handleGoogleSignIn()
    },
    {
      description: "Continue with Facebook",
      logoSrc: facebook,
      logoAlt: "facebook-login",
      onClick: () => handleFacebookSignIn()
    },
    {
      description: "Continue with Github",
      logoSrc: github,
      logoAlt: "github-login",
      onClick: () => handleGithubSignIn()
    },
  ];

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
