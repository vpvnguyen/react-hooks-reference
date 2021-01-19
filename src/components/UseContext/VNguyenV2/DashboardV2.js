import React from "react";
import { useAuthenticationContext } from "./context/AuthenticationContextV2";

export const DashboardAuthenticationButtonsV2 = () => {
  const {
    authenticationState,
    dispatchAuthentication,
  } = useAuthenticationContext();

  const logout = () => {
    dispatchAuthentication({ type: "LOGOUT" });
  };

  return (
    <button
      onClick={() => logout()}
      disabled={authenticationState ? false : true}
    >
      Logout
    </button>
  );
};

export const DashboardAuthenticationStateV2 = () => {
  const { authenticationState } = useAuthenticationContext();

  return (
    <>
      {authenticationState ? (
        <div>Welcome to your Dashboard :)</div>
      ) : (
        <div>You are not logged in. Please login to view your Dashboard.</div>
      )}
    </>
  );
};
