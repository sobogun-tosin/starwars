import { combineReducers } from "redux";
import StarWarReducer from "./reducers/StarWarReducer";

const RootReducer = combineReducers({ starWars: StarWarReducer });

export default RootReducer;
