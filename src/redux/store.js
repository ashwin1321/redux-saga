import { createStore, applyMiddleware } from "redux"
// import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./rootReducer"
import productSaga from "./productSaga"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
// here, we are using the createStore function from redux to create a store and pass in the rootReducer and the sagaMiddleware as arguments.

// const store = configureStore({
//     reducer: rootReducer,
// middleware: () => [sagaMiddleware]
// })

sagaMiddleware.run(productSaga)    // run the saga

export default store