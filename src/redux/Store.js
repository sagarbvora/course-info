import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];
export default function ConfigureStore(initialState) {
  const Store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return Store;
}
