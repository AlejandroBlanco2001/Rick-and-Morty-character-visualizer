export const INITIAL_STATE = {
    name: "",
    species: "",
    gender: "",
    status: "",
};

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload,
            };
        case "SET_SPECIES":
            return {
                ...state,
                species: action.payload,
            };
        case "SET_GENDER":
            return {
                ...state,
                gender: action.payload,
            };
        case "SET_STATUS":
            return {
                ...state,
                status: action.payload,
            };
        case "SET_FILTERS":
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
