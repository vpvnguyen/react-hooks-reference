import React, { useState, createContext, useContext } from "react";
import { style } from "../../../App";

// source: https://blog.isquaredsoftware.com/2021/01/blogged-answers-why-react-context-is-not-a-state-management-tool-and-why-it-doesnt-replace-redux/

const MyContext = createContext();

const ParentComponent = () => {
  const [state, setState] = useState("Parent State");

  // create an object containing both the value and the setter
  const contextValue = { state, setState };

  return (
    <div style={style.container}>
      <h3>Parent</h3>
      <p>Context: {state}</p>
      <button onClick={() => setState("Parent State")}>Parent setState</button>
      <MyContext.Provider value={contextValue}>
        <ChildOneComponent />
        <ChildTwoComponent />
      </MyContext.Provider>
    </div>
  );
};

const ChildOneComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div style={style.container}>
      <h3>Child 1</h3>
      <p>Context: {state}</p>
      <button onClick={() => setState("Child 1 State")}>
        Child 1 setState
      </button>
      <ChildOneNestedComponent />
    </div>
  );
};

const ChildTwoComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div style={style.container}>
      <h3>Child 2</h3>
      <p>Context: {state}</p>
      <button onClick={() => setState("Child 2 State")}>
        Child 2 setState
      </button>
    </div>
  );
};

const ChildOneNestedComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div style={style.container}>
      <h3>Child 1 Nested</h3>
      <p>Context: {state}</p>
      <button onClick={() => setState("Child 1 Nested State")}>
        Child 1 Nested setState
      </button>
    </div>
  );
};

export default function PropDrilling() {
  return (
    <>
      <ParentComponent />
    </>
  );
}
