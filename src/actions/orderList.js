import * as actionType from "../constants/actionType";

export function addOrder(item){
    return {
        type: actionType.ADD_ORDER,
        item
    }
}

export function updateOrder(item) {
    return{
        type: actionType.EDIT_ORDER,
        item
    }
}

export function removeOrder(item) {
    return{
        type: actionType.REMOVE_ORDER,
        item
    }
}