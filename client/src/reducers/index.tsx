import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    client: clientReducer,
    error: errorReducer,
    auth: authReducer
})

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;

