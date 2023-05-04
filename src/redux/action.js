// actions in redux are functions that return an object with a type and a payload
// the type is a string that describes the action
// the payload is the data that is passed to the reducer

// -- actions are plain functions
// -- get data from react
// -- pass data to reducer
// -- must sync types with reducer

export const addToCart = (data) => {
    console.warn("action called", data)
    return {
        type: "ADD_TO_CART",
        data
    }
}

