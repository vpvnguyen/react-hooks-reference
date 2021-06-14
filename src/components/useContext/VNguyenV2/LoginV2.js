import React, { useState } from "react";
import {
  useAuthenticationContext,
  useAuthenticationValueContext,
} from "./context/AuthenticationContextV2";
import {
  LoginFormContext,
  useLoginFormContext,
} from "./context/LoginFormContext";

const LoginButtons = () => {
  const { dispatchAuthentication } = useAuthenticationContext();
  const { name, setName } = useLoginFormContext(LoginFormContext);

  const handleLogin = (name) => {
    dispatchAuthentication({ type: "LOGIN", payload: name });
  };

  const handleLogout = () => {
    dispatchAuthentication({ type: "LOGOUT" });
    setName("");
  };

  return (
    <>
      <button onClick={() => handleLogin(name)}>Log In</button>
      <button onClick={() => handleLogout()}>Log Out</button>
    </>
  );
};

const LoginState = () => {
  const authenticationValue = useAuthenticationValueContext();

  return (
    <div>
      Authentication State: <b>{authenticationValue}</b>
    </div>
  );
};

export const LoginForm = () => {
  const [name, setName] = useState("");
  const loginFormContextValue = { name, setName };

  const handleOnChange = (event) => {
    setName(event.target.value);
  };

  return (
    <LoginFormContext.Provider value={loginFormContextValue}>
      <LoginState />
      <h4>Login Form</h4>
      <input
        type="text"
        label="name"
        name="name"
        value={name}
        onChange={handleOnChange}
      />
      <LoginButtons />
    </LoginFormContext.Provider>
  );
};
