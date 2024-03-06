import { FETCH_USER_INFO_SUCCESS } from '../actions/user.action';
import { FETCH_USER_INFO_FAILURE } from '../actions/user.action';

const initialState = {
    userInfo: null,
    error: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                error: null
            };
        case FETCH_USER_INFO_FAILURE:
            return {
                ...state,
                userInfo: null,
                error: action.payload
            };
        default:
            return state;
    }
}