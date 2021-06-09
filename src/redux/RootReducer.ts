import { combineReducers } from "redux";
import StarWarReducer from "./StarWarReducer";

const RootReducer = combineReducers({ starWars: StarWarReducer });

export default RootReducer;
