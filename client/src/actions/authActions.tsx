import axios from "axios";
import {AUTH_ERROR, IUserObject, USER_LOADED, USER_LOADING} from "./types";
import {returnErrors} from "./errorActions";

// Check token and load user
export const loadUser = () => (dispatch: Function, getState: Function) => {
    // User loading
    dispatch({type: USER_LOADING});

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}

// Register User

export const register = ({ userName, mail, password } : IUserObject ) => (dispatch: Function) => {



}

// Setup config/headers and token
export const tokenConfig = (getState: Function) => {

    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json",
            'x-auth-token': ""
        }
    }

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;

}







