import * as actionType from "../constants/actionType";

export function addStore(item){
    return {
        type: actionType.ADD_STORE,
        item
    }
}

export function updateStore(item) {
    return{
        type: actionType.EDIT_STORE,
        item
    }
}

export function removeStore(item) {
    return{
        type: actionType.REMOVE_STORE,
        item
    }
}