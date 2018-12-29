import * as actionType from "../constants/actionType";

export function orderList(state = [], action){
    switch(action.type){
        case actionType.ADD_ORDER:
            return state.unshift(action.item);
        case actionType.UPDATE_CITY:
            return  state.map((item, index) =>{
                if (item.id === action.item.id){
                    return action.item
                }
                else{
                    return item
                }
            });
        case actionType.REMOVE_ORDER:
            return state.filter((data, index) =>{
                return data.id !== action.item.id
            });
        default:
            return state;
    }
}