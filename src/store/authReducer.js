const defaultState  = {
    isLogin : false
}

export const SET_LOGIN = "SET_LOGIN"
export const SET_LOGOUT = "SET_LOGOUT"

export const authReducer = (state = defaultState, action) => {
    switch(action.type) {

        case SET_LOGIN:
            return {...state, isLogin: true}
        case SET_LOGOUT:
            return {...state, isLogin: false}

        default:
            return state
    }
}

export const setLoginAction = () => ({type:SET_LOGIN})
export const setLogOutAction = () => ({type:SET_LOGOUT})