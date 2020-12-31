import React from "react";
import "./App.css";
import LifeCycleMethods from "./components/classLifeCycleMethods/LifeCycleMethods";
import TodoList from "./components/useState/TodoList.jsx";
import {
  CountProvider,
  CountDisplay,
  Counter,
} from "./components/useContext/KentCDodds/CountContext";
import { AuthenticationProvider } from "./components/useContext/VNguyen/context/AuthenticationContext";
import {
  LoginState,
  LoginButtons,
} from "./components/useContext/VNguyen/Login";
import {
  DashboardAuthenticationState,
  DashboardAuthenticationButtons,
} from "./components/useContext/VNguyen/Dashboard";

const style = {
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  },
  container: {
    margin: "1rem",
    padding: "1rem",
    border: "1px solid black",
  },
};

function App() {
  return (
    <div style={style.root}>
      <div style={style.container}>
        <h1>Class Life Cycle Methods</h1>
        <LifeCycleMethods />
      </div>
      <div style={style.container}>
        <h1>useState</h1>
        <h3>Todo List</h3>
        <TodoList />
      </div>

      <div style={style.container}>
        <h1>useContext</h1>
        <h3>Counter</h3>
        <CountProvider>
          <CountDisplay />
          <Counter />
        </CountProvider>
      </div>

      <div style={style.container}>
        <h1>useContext</h1>

        <AuthenticationProvider>
          <div style={style.container}>
            <h3>Login Page</h3>
            <LoginState />
            <LoginButtons />
          </div>

          <div style={style.container}>
            <h3>Dashboard Page</h3>
            <DashboardAuthenticationState />
            <DashboardAuthenticationButtons />
          </div>
        </AuthenticationProvider>
      </div>
    </div>
  );
}

export default App;
