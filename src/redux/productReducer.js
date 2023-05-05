export const productList = (data = [], action) => {

    switch (action.type) {
        case "PRODUCT_LIST":
            console.log('product list', action)
            return [action.data]

        default:
            return data
    }

}