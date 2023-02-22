import * as actionTypes from "../actions/actionTypes";
import { INITIAL_STATE } from "./initialState";

export const changeThemeReducer = (state = INITIAL_STATE.theme, action) => {
    
    switch (action.type) {
        case actionTypes.CHANGE_THEME:
            return  action.payload;
        default:
            return state;
    }
};