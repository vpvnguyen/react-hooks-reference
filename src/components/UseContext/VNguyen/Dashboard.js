import React from "react";
import {
  useAuthenticationState,
  useAuthenticationDispatch,
} from "./context/AuthenticationContext";

export const DashboardAuthenticationButtons = () => {
  const authentication = useAuthenticationState();
  const dispatch = useAuthenticationDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <button onClick={() => logout()} disabled={authentication ? false : true}>
      Logout
    </button>
  );
};

export const DashboardAuthenticationState = () => {
  const authentication = useAuthenticationState();

  return (
    <>
      {authentication ? (
        <div>Welcome to your Dashboard :)</div>
      ) : (
        <div>You are not logged in. Please login to view your Dashboard.</div>
      )}
    </>
  );
};
