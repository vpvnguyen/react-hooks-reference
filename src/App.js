import React from "react";
import "./App.css";

import LifecycleMethods from "./components/LifecycleMethods.jsx";
import Hooks from "./components/Hooks.jsx";
import {
  CountProvider,
  CountDisplay,
  Counter,
} from "./components/UseContext/KentCDodds/CountContext";

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
        <LifecycleMethods />
      </div>
      <div style={style.container}>
        <Hooks />
      </div>

      <div style={style.container}>
        <CountProvider>
          <CountDisplay />
          <Counter />
        </CountProvider>
      </div>
    </div>
  );
}

export default App;
