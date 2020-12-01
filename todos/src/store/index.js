import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";

let middleWare = applyMiddleware(thunk);

export default createStore(reducer, middleWare);
