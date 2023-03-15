import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "../../componets/AppBar";
import ButtonIcon from "../../componets/buttons/ButtonIcon";
import { ButtonContainer } from "../../componets/buttons/ButtonContainer";
import SocialButtons from "../../componets/buttons/SocialButtons";
import KeyIcon from "@mui/icons-material/Key";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebase/FirebaseConfig";
import { toast } from 'react-toastify';

export default function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });
  const [notSamePassword, setNotSamePassword] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = values;

    setNotSamePassword(false);

    if (password != confirmPassword) {
      return setNotSamePassword(true);
    }

    createUserWithEmailAndPassword(email, password)

    console.log(user)
  };


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleShowPassword = (passwordType) => {
    setValues({
      ...values,
      [passwordType]: !values[passwordType],
    });
  };

  if (error) {
    if (error.code === "auth/email-already-in-use") {
      toast("Usuário já cadastrado")
    }
    toast("Favor tente novamente em alguns segundos")
  }

  if (user && !loading) {
    navigate('/Login')
  }

  return (
    <>
      <AppBar>
        <ButtonIcon children={<BsArrowLeft />} onClick={() => navigate("/")} />
      </AppBar>
      <PageWrapper>
        <div
          style={{
            marginTop: "10vh",
            marginBottom: "20px",
            fontSize: "24px",
          }}
        >
          Create your account
        </div>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "32px",
            width: "100%",
          }}
          autoComplete="off"
        >
          <InputField>
            <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <Input
              type={"email"}
              value={values.email}
              name={"email"}
              placeholder={"Email"}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </InputField>
          <InputField>
            <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <Input
              type={values.showPassword ? "text" : "password"}
              placeholder={"Password"}
              value={values.password}
              name={"password"}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => handleShowPassword("showPassword")}>
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              style={{ width: "100%" }}
              error={notSamePassword}
            />
          </InputField>
          <InputField>
            <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <Input
              type={values.showConfirmPassword ? "text" : "password"}
              placeholder={"Confirm password"}
              value={values.confirmPassword}
              name={"confirmPassword"}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => handleShowPassword("showConfirmPassword")}>
                    {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              style={{ width: "100%" }}
              error={notSamePassword}
            />
          </InputField>
          <ButtonContainer
            height="42px"
            width="95%"
            backgroundColor="#D93A41"
            description={loading ? 'Carregando...' : 'Sign in'}
            onClick={handleSubmit}
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
            or sign up with
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
          <p>Already have an account?</p>
          <StyledLink to="/Login">Sign in.</StyledLink>
        </div>
      </PageWrapper>
    </>
  );
}

function InputField(props) {
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
