import {combineReducers, legacy_createStore as createStore} from "redux";
import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogReducer";
import {friendsReducer} from "./friendsReducer";

export let reducers = combineReducers({
  profileReducer,
  dialogReducer,
  friendsReducer
});

export let store = createStore(reducers);
