import React, { Component } from "react";
import styled from "styled-components";
import * as Log from "../i18n/loginText";
import MainIcon from "../img/main-icon.svg";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      initial: true,
      remember: false,
      sendLoginRequest: null,
    };
  }

  sendLoginRequest = () => {
    import("../api/sendLoginRequest").then(({ default: sendLoginRequest }) => {
      this.setState({
        sendLoginRequest,
      });
    });
  };

  render() {
    const { sendLoginRequest } = this.state;
    return (
      <LoginContainer>
        <h1>{Log.productName}</h1>
        <img src={MainIcon} alt="main icon" />
        <InputRow>
          <input
            type="text"
            value={this.state.id}
            onChange={(e) => this.setState({ id: e.target.value })}
            placeholder="Login ID..."
          />
        </InputRow>
        <InputRow>
          <input
            type="password"
            value={this.state.pw}
            onChange={(e) => this.setState({ pw: e.target.value })}
            placeholder="Password..."
          />
          {this.state.initial ? null : (
            <div className={this.state.initial ? "warning" : "hidden"}>
              {Log.checkMessage}
            </div>
          )}
        </InputRow>
        <LoginOptionContainer>
          <div>
            <input
              checked={this.state.remember}
              onClick={() =>
                this.setState({
                  remember: !this.state.remember,
                  id: localStorage.getItem("id"),
                })
              }
              style={{ marginRight: "1vw" }}
              type="checkbox"
            />
            {Log.remeberId}
          </div>
        </LoginOptionContainer>
        <LoginButton onClick={this.sendLoginRequest}>{Log.login}</LoginButton>
        <CopyRightButton>{Log.subText}</CopyRightButton>
      </LoginContainer>
    );
  }
}

const LoginContainer = styled.div`
  margin: auto;
  padding: 1vw;
  margin-left: 65%;
  background-color: #ffffff;
  text-align: center;
`;

const InputRow = styled.div`
  margin: 3vh auto;
  display: flex;
  input {
    justify-content: center;
    padding: 1vh;
    width: 14vw;
  }
`;

const LoginOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  font-size: 15px;
`;

const LoginButton = styled.div`
  color: white;
  background-color: #23c2cc;
  border-radius: 4vh;
  padding: 1.2vh 0;
  margin: auto;
  width: 13vw;
  font-weight: bold;
  text-align: center;
`;

const CopyRightButton = styled.div`
  margin: 2vh;
`;
