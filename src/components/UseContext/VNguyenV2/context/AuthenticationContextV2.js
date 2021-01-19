import React, { createContext, useContext, useReducer } from "react";

const AuthenticationContext = createContext();

const authenticationReducerV2 = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const AuthenticationProviderV2 = ({ children }) => {
  const [authenticationState, dispatchAuthentication] = useReducer(
    authenticationReducerV2,
    false
  );

  const authenticationContextValue = {
    authenticationState,
    dispatchAuthentication,
  };

  return (
    <AuthenticationContext.Provider value={authenticationContextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationContext = () => {
  const { authenticationState, dispatchAuthentication } = useContext(
    AuthenticationContext
  );

  if (authenticationState === undefined || dispatchAuthentication === undefined)
    throw new Error(
      `useAuthenticationContext must be used within AuthenticationContext.Provider`
    );

  return { authenticationState, dispatchAuthentication };
};
