// combine all reducers here
// a reducer is a function that takes in the old state and an action and returns a new state
// the reducer is the only thing that can update the state

// a program can have multiple reducers so we combine them into one root reducer so that we can pass it to the store

import { combineReducers } from "redux";   // combineReducers is a function that combines all reducers into one root reducer

import { cartData } from "./reducer";
import { productList } from "./productReducer";

export const rootReducer = combineReducers({
    cartData,
    productList
})