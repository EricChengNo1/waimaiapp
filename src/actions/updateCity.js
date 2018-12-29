import {UPDATE_CITY} from "../constants/actionType";

export function updateCity(cityName) {
    return {
        type: UPDATE_CITY,
        cityName
    }
}