import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import history from "./history";
import * as Pages from "./containers";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="App">
          <Router history={history}>
            <Route exact path="/" component={Pages.LoginPage} />
            <Route path="/worklist" component={Pages.WorklistPage} />
          </Router>
        </div>
      </>
    );
  }
}
