import { createStore,combineReducers } from "redux";
import davidReducer from "../reducers/davidReducer";
import andrewReducer from "../reducers/andrewReducer";
import detailReducer from "../reducers/detailReducer";

const rootReducer = combineReducers({davidReducer,andrewReducer,detailReducer});
const store = createStore(rootReducer);

export default store;