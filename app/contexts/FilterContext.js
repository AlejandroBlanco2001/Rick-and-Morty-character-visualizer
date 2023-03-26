"use client";

import { createContext, useReducer } from "react";
import { filterReducer, INITIAL_STATE } from "../reducers/filter";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    const [filterState, dispatch] = useReducer(filterReducer, INITIAL_STATE);

    return (
        <FilterContext.Provider value={{ filterState, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContexxt = () => useContext(FilterContext);
