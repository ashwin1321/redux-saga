import { put, takeEvery } from 'redux-saga/effects'


function* getProducts() {
    let data = yield fetch("http://localhost:3000/product")
    data = yield data.json()

    // now call the action
    yield put({ type: "SET_PRODUCT_LIST", data: data })
    // put is like dispatch, it dispatches the action to the reducer
}

// eslint-disable-next-line require-yield
function* test() {
    console.log("Hello from test")
}

function* productSaga() {
    // yield is like await 
    yield takeEvery("PRODUCT_LIST", getProducts)
    // takeEvery is a function that takes in the action type as an argument and then calls the function that we want to run when that action is dispatched.
    yield takeEvery("ADD_TO_CART", test)
}

export default productSaga
