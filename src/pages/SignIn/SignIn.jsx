import styled from "styled-components";
import "../../assets/styles/typewriter.css";
import welcome2 from "../../assets/welcome2.json";
import { HiOutlineMail } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import LottieIcon from "../../componets/LottieIcon";
import SocialButtons from "../../componets/buttons/SocialButtons";
import ButtonIcon from "../../componets/buttons/ButtonIcon";
import { ButtonContainer } from "../../componets/buttons/ButtonContainer";
import { UserAuth } from "../../services/firebase/AuthContext";

export default function SignIn() {
  const navigate = useNavigate();
  const [play, setPlay] = useState(false);
  const { user } = UserAuth();

  function setDataAndNavigate(userData) {
    //TODO: add setUserData function to made de signIn
    // setUserData(userData);
    toast('Login realizado com sucesso!');
    navigate('/dashboard');
  }

  useEffect(() => {
    if (user) {
      navigate("/Home")
    }
    setPlay(true);
  }, [user]);


  return (
    <PageWrapper>
      <div style={{ marginTop: "8vh" }}>
        {/* <LottieIcon animationData={welcome2} height="20vh" /> */}
        <TypeWriterContainer />
      </div>
      <ButtonsSection>
        <TitlePage>Welcome to AppLogo!</TitlePage>
        <SocialButtonsContainer>
          <SocialButtons />
          <HorizontalLineContainer>
            <HorizontalLine />
            <p style={{ padding: "0 16px" }}>or</p>
            <HorizontalLine />
          </HorizontalLineContainer>
          <ButtonContainer
            description={"Continue with email"}
            backgroundColor={"#D93A41"}
            onClick={() => navigate("/Login")}
            startAndornment={
              <ButtonIcon size="18px" children={<HiOutlineMail />} />
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
          <StyledLink to="/SignUp">Sign up.</StyledLink>
        </div>
      </ButtonsSection>
    </PageWrapper>
  );
}

function TypeWriterContainer() {
  const typeWriteStrings = [
    "The best streaming platform",
    "All your series and movies in one app!",
    "One of the fewest platform with no advertisement",
  ];
  return (
    <div style={{ marginTop: "2vh" }}>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: "natural",
          strings: typeWriteStrings,
          wrapperClassName: "typeWriteText",
        }}
      />
    </div>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d93a41;
  font-size: 15px;
  line-height: 17.61px;
  font-weight: 700;
`;

const TitlePage = styled.div`
  font-size: 28px;
  margin-bottom: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonsSection = styled.div`
  margin-bottom: 12%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 16px;
  overflow-y: hidden;
  justify-content: space-between;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

const HorizontalLineContainer = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 0.1px;
  border: 1px solid #f4f4f4;
`;
