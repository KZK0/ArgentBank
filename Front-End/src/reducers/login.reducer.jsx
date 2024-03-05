import { LOGIN_USER_SUCCESS } from '../actions/login.action';
import { LOGIN_USER_ERROR } from '../actions/login.action';
import { LOGOUT_USER } from '../actions/login.action';

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
                token: action.payload.token,
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                auth: false,
                token: null,
            };
        case LOGOUT_USER:
            return initialState;
        default:
            return state;
    }
}
