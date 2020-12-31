import React from "react";
import {
  useAuthenticationDispatch,
  useAuthenticationState,
} from "./context/AuthenticationContext";

export const LoginButtons = () => {
  const dispatch = useAuthenticationDispatch();

  const login = () => {
    dispatch({ type: "login" });
  };

  const logout = () => {
    dispatch({ type: "logout" });
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
