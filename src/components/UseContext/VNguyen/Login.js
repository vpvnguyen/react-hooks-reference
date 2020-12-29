import React, { useContext } from "react";
import {
  AuthenticationStateContext,
  useAuthenticationDispatch,
  useAuthenticationState,
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
  const authentication = useAuthenticationState();
  return (
    <>
      <div>Authentication: {authentication ? "Logged In" : "Logged Out"}</div>
    </>
  );
};
