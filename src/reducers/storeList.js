import * as actionType from "../constants/actionType";

export function storeList(state = [], action){
    switch(action.type){
        case actionType.ADD_STORE:
            return state.unshift(action.item);
        case actionType.EDIT_STORE:
            return  state.map((item, index) =>{
                if (item.id === action.item.id){
                    return action.item
                }
                else{
                    return item
                }
            });
        case actionType.REMOVE_STORE:
            return state.filter((data, index) =>{
                return data.id !== action.item.id
            });
        default:
            return state;
    }
}