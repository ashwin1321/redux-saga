// reducer handles data from the store
// updates data in the store

// RULES:
// needs root reducer
// must return some value
// must have some initial state or value

// action and reducer communicate through the store. 

export const cartData = (data = [], action) => {
    // takes two arguments: state and action. 
    // state is the current state of the store
    // action is the action that is dispatched. action is an object with a type and a payload. 

    // if (action.type === "ADD_TO_CART") {
    //     console.log("reducer called", action, data)
    //     return action.data
    // }
    // return "no action matched"

    switch (action.type) {
        case "ADD_TO_CART":
            console.log(action.data)
            return 1
        case "REMOVE_FROM_CART":
            return data.filter(item => item.id !== action.data.id)
        default:
            return data
    }
}