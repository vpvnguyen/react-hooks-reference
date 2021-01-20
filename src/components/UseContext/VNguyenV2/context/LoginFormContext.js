import { createContext, useContext } from "react";

export const LoginFormContext = createContext();

export const useLoginFormContext = () => useContext(LoginFormContext);
