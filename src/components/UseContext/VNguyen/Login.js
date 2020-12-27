import React from "react";
import { useContext } from "react";
import {
  AuthenticationStateContext,
  useAuthenticationDispatch,
} from "./context/AuthenticationContext";

export const LoginButtons = () => {
  const dispatch = useAuthenticationDispatch();
  return (
    <>
      <button onClick={() => dispatch({ type: "login" })}>Log In</button>
      <button onClick={() => dispatch({ type: "logout" })}>Log Out</button>
    </>
  );
};

export const LoginState = () => {
  const authentication = useContext(AuthenticationStateContext);
  return (
    <>
      <h1>useContext</h1>
      <h3>Authentication: {authentication ? "Logged In" : "Logged Out"}</h3>
    </>
  );
};
