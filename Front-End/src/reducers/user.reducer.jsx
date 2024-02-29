const intialState = {
    loading: false,
    userData: null,
};

export default function userReducer(state = intialState, action) {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                userData: action.payload,
            };
        case "UPDATE_USER":
            return {
                ...state,
                userData: action.payload,
            };
        case "ADD_USER":
            return action.payload;

        case "USER_LOGOUT":
            return {
                ...state,
                userData: null,
            };
        default:
            return state;
    }
}