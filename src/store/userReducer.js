const defaultState = { 
    users : [],
    currentUser : null
}


export const ADD_USER = "ADD_USER"
export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const EDIT_USERS = "EDIT_USERS"

export const userReducer = (state = defaultState, action) =>  { 
    switch(action.type) { 
        case ADD_USER: 
            return ({...state,  users : [...state.users, action.payload]})
        case SET_CURRENT_USER:
            return ({...state, currentUser: action.payload})
        case EDIT_USERS: 
            return ({...state, users : [...action.payload]})
        default:
            return state
    }
} 

export const addUserAction = (payload) => ({ type : ADD_USER, payload})
export const setCurrenUserAction = (payload) => ({ type : SET_CURRENT_USER, payload})
export const editUsersAction = (payload) => ({ type : EDIT_USERS, payload})