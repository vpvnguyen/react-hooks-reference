import React, { useContext } from "react";
import {
  AuthenticationStateContext,
  useAuthenticationDispatch,
  useAuthenticationState,
} from "./context/AuthenticationContext";

const DashboardAuthenticationState = () => {
  //   const authentication = useContext(AuthenticationStateContext);
  const authentication = useAuthenticationState();

  return (
    <>
      {authentication ? (
        <div>Dashboard State</div>
      ) : (
        <div>You are not logged in</div>
      )}
    </>
  );
};

const DashboardAuthenticationButtons = () => {
  //   const authentication = useContext(AuthenticationStateContext);
  const authentication = useAuthenticationState();

  const dispatch = useAuthenticationDispatch();
  return (
    <>
      {authentication ? (
        <button onClick={dispatch({ type: "logout" })}>Logout</button>
      ) : (
        <button disabled={true}>Logout</button>
      )}
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <DashboardAuthenticationState />
      <DashboardAuthenticationButtons />
    </>
  );
};

export default Dashboard;
