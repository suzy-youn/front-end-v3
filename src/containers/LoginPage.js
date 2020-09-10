import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import * as Parts from "../components";



const LoginPage = () => {
  return (
    <>
      <Container>
        <Parts.Login />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("../img/home-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f8f4e7;
  display: flex;
  &:focus {
    outline:0;
  }
`;

export default LoginPage;
