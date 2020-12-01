import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/stickers";
import thunk from "redux-thunk";

let middleWare = applyMiddleware(thunk);

export default createStore(reducer, middleWare);
