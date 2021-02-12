// SRC: https://www.robinwieruch.de/react-hooks-fetch-data

import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      console.log("init");
      return { ...state, loading: true, error: false };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        payload: action.payload,
      };
    case FETCH_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      throw new Error("dataFetchReducer error: state, action", state, action);
  }
};

export const useDataFetcher = (initialUrl) => {
  console.log("useDataFetcher invoked");
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    let runTask = true;

    const fetchData = async () => {
      dispatch({ type: FETCH_INIT });

      try {
        const response = await axios(url);
        console.log(response.data);
        if (runTask) dispatch({ type: FETCH_SUCCESS, payload: response.data });
        console.log(state.data);
      } catch (error) {
        console.error("fetchData error:", error);
        if (runTask) dispatch({ type: FETCH_FAILURE });
      }
    };

    fetchData();

    return () => {
      console.log("Cancelling useDataFetcher");
      runTask = false;
    };
  }, [url, state.data]);

  return { state, setUrl };
};
