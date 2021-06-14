import React, { createContext, useContext, useReducer } from "react";

const CountStateContext = createContext();
const CountDispatchContext = createContext();

const CountDisplay = () => {
  const { count } = useContext(CountStateContext);
  return <div>{count}</div>;
};

const Counter = () => {
  const dispatch = useCountDispatch();
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};

const useCountState = () => {
  const context = useContext(CountStateContext);

  if (context === undefined) {
    throw new Error(`useCountState must be used within a CountProvider`);
  }

  return context;
};

const useCountDispatch = () => {
  const context = useContext(CountDispatchContext);

  if (context === undefined) {
    throw new Error(`useCountDispatch must be used within a CountProvider`);
  }

  return context;
};

export {
  CountDisplay,
  Counter,
  CountProvider,
  useCountState,
  useCountDispatch,
};
