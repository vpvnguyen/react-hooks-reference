import React from "react";
import {
  useAuthenticationContext,
  useIsAuthenticatedContext,
  useAuthenticatedUserContext,
  useAuthenticatedRoleContext,
} from "./context/AuthenticationContextV2";

export const DashboardAuthenticationButtonsV2 = () => {
  const { dispatchAuthentication } = useAuthenticationContext();
  const isAuthenticated = useIsAuthenticatedContext();

  const logout = () => {
    dispatchAuthentication({ type: "LOGOUT" });
  };

  return (
    <button onClick={() => logout()} disabled={isAuthenticated ? false : true}>
      Logout
    </button>
  );
};

export const DashboardAuthenticationStateV2 = () => {
  const isAuthenticated = useIsAuthenticatedContext();
  const authenticatedUser = useAuthenticatedUserContext();
  const authenticatedRole = useAuthenticatedRoleContext();

  return (
    <>
      {isAuthenticated ? (
        <div>
          <p>
            Welcome to your Dashboard, <b>{authenticatedUser}</b> :)
          </p>
          <p>
            You have <b>{authenticatedRole}</b> access
          </p>
        </div>
      ) : (
        <div>
          <p>
            Welcome, you are a <b>{authenticatedRole}</b>.
          </p>
          <p>Please login to view your Dashboard.</p>
        </div>
      )}
    </>
  );
};
