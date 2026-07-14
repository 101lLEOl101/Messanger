import {UserAction, UserState} from "../interfaces/user.interfaces";

const initialState : UserState = {
    user : null,
    token : null,
}

export const userReducer = (state = initialState, action : UserAction) => {
    switch(action.type) {
        case "ADD_USER":
            return {...state, user : action.payload?.user, token : action.payload?.token }
        case "REMOVE_USER":
            return {...state, user : null, token : null }
        default:
            return state;
    }
};