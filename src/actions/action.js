import base64 from "base-64";
import React from "react";
import { ExperationCheck } from "./auth";

export const USER_NAME = "USER_NAME";
export const userName = name => ({
  type: USER_NAME,
  name
});
export const LOGIN_ERROR = "LOGIN_ERROR";
export const loginError = error => ({
  type: LOGIN_ERROR,
  error
});

export const userLogin = (userObj, history) => dispatch => {
  const userCreds = base64.encode(`${userObj.email.toLowerCase()}:${userObj.password}`);
  return fetch(`/api/user/login`, {
    method: "POST",
    headers: {
      Authorization: "Basic " + userCreds,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: userObj.email })
  })
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json.message) {
        dispatch(loginError(json.message));
      }
      localStorage.setItem("user", JSON.stringify(json));
      return localStorage.getItem("user");
    })
    .then(localStorageData => {
      let userStorageObj = JSON.parse(localStorageData);
      dispatch(authCheck(userStorageObj.token, history));
    })
    .catch(err => {
      console.log(err);
    });
};

export const createUser = (userobj, history) => dispatch => {
  fetch("/api/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ userobj })
  })
    .then(response => response.json())
    .then(json => {
      if (json.message !== "email is already taken") {
        let loginObj = json;
        loginObj.password = userobj.password;
        dispatch(userLogin(loginObj, history));
      } else {
        console.log(json.message);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const authCheck = (jwtToken, history) => dispatch => {
  return fetch(`/api/user/auth/check`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + jwtToken,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.status === 403) {
        if (response.statusText) {
          let error = response.statusText.split(":");
          if (error[1] === " jwt expired") {
            history.replace({
              pathname: "/login",
              state: {}
            });
          }
        }
      } else {
        history.replace({
          pathname: "/row",
          state: {}
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
};
