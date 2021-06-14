import React from "react";
import { useCount } from "./count-context";

const CountDisplay = () => {
  const {
    state: { count },
  } = useCount();
  return <div>{`The current count is ${count}`}</div>;
};

const Counter = () => {
  const { dispatch } = useCount();

  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      Increment Count
    </button>
  );
};

export { CountDisplay, Counter };
