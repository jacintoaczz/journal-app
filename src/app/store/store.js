import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { authReducer } from "./features/auth/reducers/auth.reducer";

const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(reducers, devToolsEnhancer({}));
