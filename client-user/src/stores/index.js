import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { logger } from "../middlewares/logger";
import { productReducer } from "./reducers/products";

const rootReducer = combineReducers({
    product: productReducer,
});

let store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
