import ActionTypes from "../constants/actions-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const setSelectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT_DETAIL,
        payload: product
    }
}
export const removedSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_PRODUCT_DETAIL,
    }
}
