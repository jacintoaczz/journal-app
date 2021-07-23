import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./features/auth/reducers/auth.reducer";
import { uiReducer } from "./features/ui/reducers/uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
