import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.jpg";
import { ButtonContainer } from "./ButtonContainer";
import styled from "styled-components";
import { UserAuth } from "../../services/firebase/AuthContext";
import { toast } from "react-toastify";

const providerName = Object.freeze({
  github: "GITHUB",
  google: "GMAIL",
  facebook: "FACEBOOK",
})

export default function SocialButtons() {
  const {
    handleSignInWithPopUp,
    setUser
  } = UserAuth()

  const socialButtons = [
    {
      description: "Continue with Google",
      logoSrc: google,
      logoAlt: "google-login",
      provider: providerName.google,
      handleSignIn: handleSignInWithPopUp
    },
    {
      description: "Continue with Facebook",
      logoSrc: facebook,
      logoAlt: "facebook-login",
      provider: providerName.facebook,
      handleSignIn: handleSignInWithPopUp
    },
    {
      description: "Continue with Github",
      logoSrc: github,
      logoAlt: "github-login",
      provider: providerName.github,
      handleSignIn: handleSignInWithPopUp
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
                const data = await button.handleSignIn(button.provider);
                setUser(data.user)
              } catch (error) {
                const verifiedProvider = error.customData._tokenResponse.verifiedProvider;
                if (verifiedProvider.includes('google.com')) {
                  return toast('Your account was created with Google')
                }
                return toast('Please try again later.');
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
