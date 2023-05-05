export const productList = (data = [], action) => {

    switch (action.type) {

        case "SET_PRODUCT_LIST":
            console.log('set product list', action)
            return [...action.data]

        case "ADD_PRODUCT_SUCCESS":
            console.log('add product success', action)
            return [...data, action.data]

        default:
            return data
    }

}

