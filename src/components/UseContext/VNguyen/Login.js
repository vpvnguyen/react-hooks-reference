import React from "react";
import {
  useAuthenticationState,
  useAuthenticationDispatch,
} from "./context/AuthenticationContext";

export const LoginButtons = () => {
  const dispatch = useAuthenticationDispatch();

  const login = () => {
    dispatch({ type: "LOGIN" });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <button onClick={() => login()}>Log In</button>
      <button onClick={() => logout()}>Log Out</button>
    </>
  );
};

export const LoginState = () => {
  const authentication = useAuthenticationState();

  return (
    <div>
      Authentication State: <b>{authentication ? "Logged In" : "Logged Out"}</b>
    </div>
  );
};
