import {
    REGISTER_SUCCESS,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOG_OUT
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

export default function(state = initialState, action) {

    const { type, payload } = action;

    switch(type) {

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        //--------------------------------------------------------------------
        case LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
        //--------------------------------------------------------------------
        default:
            return state;
    }

}