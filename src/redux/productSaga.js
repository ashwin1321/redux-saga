import { put, takeEvery } from 'redux-saga/effects'


function* getProducts() {
    let data = yield fetch("http://localhost:3000/product")
    data = yield data.json()

    // now call the action
    yield put({ type: "SET_PRODUCT_LIST", data: data })
    // put is like dispatch, it dispatches the action to the reducer
}

function* addProduct(action) {
    const { product } = action.payload;
    const response = yield fetch("http://localhost:3000/product", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    const data = yield response.json();
    yield put({ type: "ADD_PRODUCT_SUCCESS", data: data });
}


function* productSaga() {
    // yield is like await 
    yield takeEvery("PRODUCT_LIST", getProducts)
    // takeEvery is a function that takes in the action type as an argument and then calls the function that we want to run when that action is dispatched.
    yield takeEvery("ADD_PRODUCT", addProduct);

}

export default productSaga
