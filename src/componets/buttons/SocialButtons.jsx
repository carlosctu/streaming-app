import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.jpg";
import { ButtonContainer } from "./ButtonContainer";
import styled from "styled-components";
import { UserAuth } from "../../services/firebase/AuthContext";

const providerName = Object.freeze({
  github: "GITHUB",
  google: "GMAIL",
  facebook: "FACEBOOK",
})

export default function SocialButtons() {
  const {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleFacebookSignIn
  } = UserAuth()
  
  const socialButtons = [
    {
      description: "Continue with Google",
      logoSrc: google,
      logoAlt: "google-login",
      signIn: handleGoogleSignIn
    },
    {
      description: "Continue with Facebook",
      logoSrc: facebook,
      logoAlt: "facebook-login",
      signIn: handleFacebookSignIn
    },
    {
      description: "Continue with Github",
      logoSrc: github,
      logoAlt: "github-login",
      signIn: handleGithubSignIn
    },
  ];

  return (
    <ButtonsWrapper>
      {socialButtons.map((button, index) => (
        <ButtonContainer
          key={index}
          description={button.description}
          logoSrc={button.logoSrc}
          logoAlt={button.logoAlt}
          backgroundColor={button.backgroundColor}
          onClick={
            async () => {
              try {
                await button.signIn()
              } catch (error) {
                console.log(error)
              }
            }}
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
