import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import { ButtonContainer, ButtonProps } from "./ButtonContainer";
import styled from "styled-components";

export default function SocialButtons() {
  const socialButtons: ButtonProps[] = [
    {
      description: "Continue with Google",
      logoSrc: google,
      logoAlt: "google-login",
    },
    {
      description: "Continue with Facebook",
      logoSrc: facebook,
      logoAlt: "facebook-login",
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
