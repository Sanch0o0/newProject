import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleWare, { ThunkDispatch } from 'redux-thunk'
import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogReducer";
import {friendsReducer} from "./friendsReducer";
import { authReducer } from './authReducer';
import { appReducer } from "./appReducer";
import { reducer as formReducer } from 'redux-form';
import { chatReducer } from "./chatReducer";


export let reducers = combineReducers({
  profileReducer,
  dialogReducer,
  friendsReducer,
  authReducer,
  form: formReducer,
  appReducer,
  chatReducer
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export type AppDispatch = typeof store.dispatch

export let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
