import { applyMiddleware, createStore } from "redux";
import contacts from "./reducers/contacts";
import thunk from "redux-thunk";

export default createStore(contacts, applyMiddleware(thunk));
