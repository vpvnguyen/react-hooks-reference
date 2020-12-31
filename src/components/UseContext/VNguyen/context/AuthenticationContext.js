import React, { createContext, useContext, useReducer } from "react";

const AuthenticationStateContext = createContext();
const AuthenticationDispatchContext = createContext();

const authenticationReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const AuthenticationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authenticationReducer, false);
  return (
    <AuthenticationStateContext.Provider value={state}>
      <AuthenticationDispatchContext.Provider value={dispatch}>
        {children}
      </AuthenticationDispatchContext.Provider>
    </AuthenticationStateContext.Provider>
  );
};

export const useAuthenticationState = () => {
  const context = useContext(AuthenticationStateContext);

  if (context === undefined)
    throw new Error(
      `useAuthenticationState must be used within a AuthenticationProvider`
    );

  return context;
};

export const useAuthenticationDispatch = () => {
  const context = useContext(AuthenticationDispatchContext);

  if (context === undefined)
    throw new Error(
      `useAuthenticationDispatch must be used within a AuthenticationProvider`
    );

  return context;
};
