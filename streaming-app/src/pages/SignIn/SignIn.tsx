import styled from "styled-components";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import appLogo from "../../assets/appLogo.json";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";
import Lottie from "react-lottie";

export default function SignIn() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: appLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const socialButtons: ButtonProps[] = [
    {
      description: "Continue with Google",
      logoSrc: google,
      logoAlt: "google-login",
      backgroundColor: "#ffffff",
    },
    {
      description: "Continue with Facebook",
      logoSrc: facebook,
      logoAlt: "facebook-login",
      backgroundColor: "#ffffff",
    },
  ];

  return (
    <PageContainer>
      <div style={{ marginTop: "64px" }}>
        <Lottie options={defaultOptions} height={150} width={150} />
        <TitlePage>Welcome to AppLogo,</TitlePage>
        <TitlePage>The best streaming platform.</TitlePage>
      </div>
      <ButtonsSection>
        <SocialButtonsContainer>
          {socialButtons.map((btn) => (
            <ButtonContainer
              description={btn.description}
              logoSrc={btn.logoSrc}
              logoAlt={btn.logoAlt}
              backgroundColor={btn.backgroundColor}
            />
          ))}
          <HorizontalLineContainer>
            <HorizontalLine />
            <p style={{ padding: "0 16px" }}>or</p>
            <HorizontalLine />
          </HorizontalLineContainer>
          <ButtonContainer
            description={"Continue with email"}
            backgroundColor={"#D93A41"}
            children={
              <IconContext.Provider value={{ size: "18px" }}>
                <IconContainer>
                  <HiOutlineMail />
                </IconContainer>
              </IconContext.Provider>
            }
          />
        </SocialButtonsContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "8px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <p>Don't have an account?</p>
          <p> Sign up.</p>
        </div>
      </ButtonsSection>
    </PageContainer>
  );
}
type ButtonProps = {
  description: string;
  logoSrc?: string;
  logoAlt?: string;
  backgroundColor: string;
  onClick?: () => void;
  children?: JSX.Element;
};

export function ButtonContainer(props: ButtonProps): JSX.Element {
  return (
    <SocialButtonContainer
      color={props.backgroundColor}
      onClick={props.onClick}
    >
      <GithubLogo src={props.logoSrc} alt={props.logoAlt} />
      {props.children}
      {props.description}
    </SocialButtonContainer>
  );
}

const TitlePage = styled.p`
  font-size: 24px;
  padding-top: 18px;
`;

const ButtonsSection = styled.div`
  margin-bottom: 32px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 16px;
  overflow-y: hidden;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  padding: 0 5px 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

const GithubLogo = styled.img`
  height: 24px;
  padding-right: 10px;
`;

const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 100%;
  background: ${(props) => props.color};
  color: ${(props) => (props.color != "#ffffff" ? "#ffffff" : "black")};
  border: 2px solid #f4f4f4;
  border-radius: 12px;
  cursor: pointer;
`;

const HorizontalLineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 0.1px;
  border: 1px solid #f4f4f4;
`;
function useRef(arg0: number[]) {
  throw new Error("Function not implemented.");
}
