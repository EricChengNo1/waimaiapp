import {UPDATE_USER} from "../constants/actionType";


export function updateUser(user) {
    return {
        type: UPDATE_USER,
        user
    }
}

