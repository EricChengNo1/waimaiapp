import {UPDATE_USER} from "../constants/actionType";

const initialState ={
    userid: ''
};
export function userInfo(state = initialState, action) {
    switch (action.type){
        case UPDATE_USER:
            return {
                userid: action.user
            };
        default:
            return state;
    }
}