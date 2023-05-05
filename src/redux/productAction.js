
export const productListing = () => {
    let data = "hello"
    console.warn("action called", data)
    return {
        type: "PRODUCT_LIST",
        data
    }
}