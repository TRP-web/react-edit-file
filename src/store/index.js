import { createStore, combineReducers, applyMiddleware } from "redux"
import { fileReducer } from "./fileReducer"
// import thunk from "redux-thunk"

const rootReducer =  combineReducers({
    file: fileReducer
})

export const store = createStore(rootReducer)