import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import InputAdornment from "@mui/material/InputAdornment";
import ButtonIcon from "../../componets/ButtonIcon";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import appLogo from "../../assets/appLogo.json";
import { ButtonContainer } from "../../componets/ButtonContainer";
import SocialButtons from "../../componets/SocialButtons";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import AppBar from "../../componets/AppBar";
export default function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: appLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit: React.FormEventHandler = (event: React.ChangeEvent) => {
    const { email, password } = values;
    event.preventDefault();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleShowPassword: React.MouseEventHandler = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <>
      <AppBar>
        <ButtonIcon children={<BsArrowLeft />} onClick={() => navigate("/")} />
      </AppBar>
      <PageWrapper>
        <div
          style={{
            height: "180px",
            width: "150px",
            marginTop: "10%",
            marginBottom: "20px",
          }}
        >
          <Lottie options={defaultOptions} />
        </div>
        <div
          style={{
            marginBottom: "20px",
            fontSize: "24px",
          }}
        >
          Login into Your Account
        </div>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "24px",
            width: "100%",
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              width: "95%",
            }}
          >
            <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <Input
              type={"text"}
              value={values.email}
              name={"email"}
              placeholder={"Email"}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              width: "95%",
            }}
          >
            <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <Input
              type={values.showPassword ? "text" : "password"}
              placeholder={"Password"}
              value={values.password}
              name={"password"}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              style={{ width: "100%" }}
            />
          </Box>
          <ButtonContainer
            height="42px"
            width="95%"
            backgroundColor="#D93A41"
            description="Sign in"
          />
        </Box>

        <HorizontalLineContainer>
          <HorizontalLine />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "500px",
            }}
          >
            or continue with
          </div>
          <HorizontalLine />
        </HorizontalLineContainer>
        <SocialButtons />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "8px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <p>Don't have an account?</p>
          <p> Sign up.</p>
        </div>
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 0 16px;
  form {
    display: flex;
    flex-direction: column;
  }
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
