import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./index";
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default configureStore;