import { LOGIN_USER_SUCCESS } from '../actions/login.action';
import { LOGIN_USER_ERROR } from '../actions/login.action';

const initialState = {
    auth: false,
    token: null,
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            console.log(action);
            return {
                ...state,
                auth: true,
                token: action.payload.token, // Stocker le token dans le state
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                auth: false,
                token: null,
            };
        default:
            return state;
    }
}
