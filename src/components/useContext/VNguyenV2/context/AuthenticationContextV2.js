import React, { createContext, useContext, useReducer } from "react";

const AuthenticationContext = createContext();

const user = {
  name: "VNguyen",
  role: "DEVELOPER",
};

const initialAuthenticationState = {
  value: "UNAUTHENTICATED",
  isAuthenticated: false,
  user: {
    name: "",
    role: "GUEST",
    isActive: false,
    doNotTouch: "Do not touch this string",
  },
};

const authenticationReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        value: "AUTHENTICATED",
        isAuthenticated: true,
        user: {
          ...state.user,
          isActive: true,
          name: action.payload,
          role: user.role,
        },
      };
    case "LOGOUT":
      return initialAuthenticationState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const validatedContext = (context) => {
  if (context === undefined)
    throw new Error(
      `context: ${context} must be used within AuthenticationContext.Provider`
    );
  return context;
};

export const AuthenticationProviderV2 = ({ children }) => {
  const [authenticationState, dispatchAuthentication] = useReducer(
    authenticationReducer,
    initialAuthenticationState
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

  console.log(
    `useAuthenticationContext - authenticationState: ${JSON.stringify(
      authenticationState,
      null,
      2
    )}`
  );

  return {
    authenticationState: validatedContext(authenticationState),
    dispatchAuthentication: validatedContext(dispatchAuthentication),
  };
};

export const useAuthenticationValueContext = () => {
  const { authenticationState } = useContext(AuthenticationContext);
  return validatedContext(authenticationState.value);
};

export const useIsAuthenticatedContext = () => {
  const { authenticationState } = useContext(AuthenticationContext);
  return validatedContext(authenticationState.isAuthenticated);
};

export const useAuthenticatedUserContext = () => {
  const { authenticationState } = useContext(AuthenticationContext);
  return validatedContext(authenticationState.user.name);
};

export const useAuthenticatedRoleContext = () => {
  const { authenticationState } = useContext(AuthenticationContext);
  return validatedContext(authenticationState.user.role);
};
