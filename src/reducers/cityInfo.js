import {UPDATE_CITY} from "../constants/actionType";

export function cityInfo(state = '上海', action) {
    switch (action.type){
        case UPDATE_CITY:
            return  action.cityName;
        default:
            return state;
    }
}