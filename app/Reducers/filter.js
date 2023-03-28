export const INITIAL_STATE = {
    name:
        typeof window !== "undefined" ? localStorage.getItem("name") || "" : "",
    species:
        typeof window !== "undefined"
            ? localStorage.getItem("species") || ""
            : "",
    gender:
        typeof window !== "undefined"
            ? localStorage.getItem("gender") || ""
            : "",
    status:
        typeof window !== "undefined"
            ? localStorage.getItem("status") || ""
            : "",
};

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            localStorage.setItem("name", action.payload);
            return {
                ...state,
                name: action.payload,
            };
        case "SET_SPECIES":
            localStorage.setItem("species", action.payload);
            return {
                ...state,
                species: action.payload,
            };
        case "SET_GENDER":
            localStorage.setItem("gender", action.payload);
            return {
                ...state,
                gender: action.payload,
            };
        case "SET_STATUS":
            localStorage.setItem("status", action.payload);
            return {
                ...state,
                status: action.payload,
            };
        case "SET_FILTERS":
            localStorage.setItem("name", action.payload.name || "");
            localStorage.setItem("species", action.payload.species || "");
            localStorage.setItem("gender", action.payload.gender || "");
            localStorage.setItem("status", action.payload.status || "");
            return {
                ...action.payload,
            };
        default:
            return state;
    }
};
