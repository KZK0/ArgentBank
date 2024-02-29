import { LOGIN_USER_SUCCESS } from '../actions/login.action';
import { LOGIN_USER_ERROR } from '../actions/login.action';
import { LOGIN_USER_LOADING } from '../actions/login.action';

const initialState = {
    auth: false,
    token: null,
    isLoading: false
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                auth: true,
                token: action.payload.token, // Stocker le token dans le state
                isLoading: false
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                auth: false,
                token: null,
                isLoading: false
            };
        case LOGIN_USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
}
