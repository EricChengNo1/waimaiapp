import {combineReducers} from "redux";
import {userInfo} from "./userInfo";
import {cityInfo} from "./cityInfo";
import {orderList} from './orderList';
import {storeList} from './storeList';

const rootReducer = combineReducers({
    userInfo,
    cityInfo,
    orderList,
    storeList
});

export default rootReducer;


