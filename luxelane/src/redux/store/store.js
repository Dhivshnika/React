import { createStore, combineReducers } from "redux";
import cartReducer from "../reducers/cartReducer";
import wishReducer from "../reducers/wishReducer";
const rootReducer = combineReducers({ cartReducer, wishReducer });
const store = createStore(rootReducer);

export default store;