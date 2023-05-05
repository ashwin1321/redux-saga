
export const productListing = () => {
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    // calling the api
    // problem with this is: jaba samma data aauxa teti bela samma program agadi gai sakya hunxa
    //The problem with this code is that productListing is an asynchronous function that returns a Promise that resolves to a plain object representing an action. However, Redux expects action creators to return plain objects directly, not Promises.

    // data = await data.json()
    // console.log(data)
    // let data = "ashwin"
    // console.warn("action called", data)
    return {
        type: "PRODUCT_LIST",
    }
}

// export const setProductListing = (data) => {
//     console.log(`set action`, data)
//     return {
//         type: "SET_PRODUCT_LIST",
//         data
//     }
// }

export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: {
            product: product           // payload is an object that contains the data that we want to send to the reducer
        }
    };
};