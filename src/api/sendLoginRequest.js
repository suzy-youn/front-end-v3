import React from "react";
import { serverIP } from "../constants";

export const sendLoginRequest = (id, pw) => {
  let loginData = { name: id, password: pw };
  let jData = JSON.stringify(loginData);
  let postData = {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: jData,
  };

  console.log("실행은된다");

  return <div>실행은된다</div>;

  //   fetch(`${serverIP}/aihospital/auth/user/login`, postData)
  //     .then((response) => response.json())
  //     .then((body) => {
  //       if (body.status === "ok") {
  //         if (this.state.remember) {
  //           localStorage.setItem("id", this.state.id);
  //         }
  //         localStorage.setItem("remember", this.state.remember);
  //         sessionStorage.setItem("id", this.state.id);
  //         sessionStorage.setItem("account_type", body.group_description);
  //         sessionStorage.setItem("refresh_token", body.refresh_token);
  //         sessionStorage.setItem("access_token", body.access_token);
  //         history.push("/tele/worklist");
  //       } else {
  //         if (body.status === "check_id") {
  //           window.alert("Check ID Again");
  //         } else if (body.status === "check_pw") {
  //           window.alert("Check Password Again");
  //         } else {
  //           window.alert("Something went wrong. Please try again");
  //         }
  //       }
  //     })
  //     .catch((exception) => {
  //       window.alert("Something went wrong. Please try again");
  //     });
};
