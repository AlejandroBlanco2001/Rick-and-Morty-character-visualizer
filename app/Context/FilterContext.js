"use client";

import { createContext, useContext, useReducer } from "react";
import { filterReducer, INITIAL_STATE } from "../reducers/filter";

const GlobalContext = createContext(INITIAL_STATE);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE);
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
