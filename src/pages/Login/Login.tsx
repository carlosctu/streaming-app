import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import appLogo from "../../assets/appLogo.json";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "../../componets/AppBar";
import LottieIcon from "../../componets/LottieIcon";
import ButtonIcon from "../../componets/buttons/ButtonIcon";
import { ButtonContainer } from "../../componets/buttons/ButtonContainer";
import SocialButtons from "../../componets/buttons/SocialButtons";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

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
        <LottieIcon
          animationData={appLogo}
          height="180px"
          width="150px"
          enableLoop={false}
        />
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
          <InputField>
            <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <Input
              type={"text"}
              value={values.email}
              name={"email"}
              placeholder={"Email"}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </InputField>
          <InputField>
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
          </InputField>
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
          <StyledLink to="/SignUp"> Sign up.</StyledLink>
        </div>
      </PageWrapper>
    </>
  );
}

type InputFieldProps = {
  children: React.ReactNode;
};

function InputField(props: InputFieldProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        width: "95%",
      }}
    >
      {props.children}
    </Box>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d93a41;
  font-size: 15px;
  line-height: 17.61px;
  font-weight: 700;
`;

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
