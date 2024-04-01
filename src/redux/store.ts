import { createStore, applyMiddleware, AnyAction, } from "@reduxjs/toolkit";
import tagsReducer from "./tagsRedux";
import { ThunkAction, thunk } from "redux-thunk";



const store = createStore(
    tagsReducer,
    applyMiddleware(thunk),
)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type AppDispatch = typeof store.dispatch