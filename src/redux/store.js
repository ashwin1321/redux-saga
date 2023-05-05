import { createStore, applyMiddleware } from "redux"
// import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./rootReducer"
import productSaga from "./productSaga"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// const store = configureStore({
//     reducer: rootReducer,
// middleware: () => [sagaMiddleware]
// })

sagaMiddleware.run(productSaga)

export default store