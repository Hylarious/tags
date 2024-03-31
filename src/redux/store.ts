import { createStore, applyMiddleware, combineReducers, AnyAction, compose } from "@reduxjs/toolkit";
import tagsReducer from "./tagsRedux";
import { ThunkAction,  thunk } from "redux-thunk";

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
//   }

//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    tagsReducer,
    applyMiddleware(thunk),
    // composeEnhancers()
    


)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type AppDispatch = typeof store.dispatch