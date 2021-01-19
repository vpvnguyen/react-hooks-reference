import React from "react";
import { useAuthenticationContext } from "./context/AuthenticationContextV2";

export const LoginButtonsV2 = () => {
  const { dispatchAuthentication } = useAuthenticationContext();

  const login = () => {
    dispatchAuthentication({ type: "LOGIN" });
  };

  const logout = () => {
    dispatchAuthentication({ type: "LOGOUT" });
  };

  return (
    <>
      <button onClick={() => login()}>Log In</button>
      <button onClick={() => logout()}>Log Out</button>
    </>
  );
};

export const LoginStateV2 = () => {
  const { authenticationState } = useAuthenticationContext();

  return (
    <div>
      Authentication State:{" "}
      <b>{authenticationState ? "Logged In" : "Logged Out"}</b>
    </div>
  );
};
