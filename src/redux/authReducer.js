import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const authThunkCreator = () =>
    async (dispatch) => {
        let response = await authAPI.authentication();
        let {id, email, login} = response.data;
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
export const login = (email, password, rememberMe) =>
    async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(authThunkCreator())
        } else {
            let message = response.data.messages.length > 0
                ? response.data.messages[0] : 'Common error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
export const logout = () =>
    async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(dispatch(setAuthUserData(null, null, null, false)))
        }
    }

export default authReducer;