import ActionTypes from "../constants/actions-types";

const initialState = {
    products: []
};
export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}
export const selectedProductReducers = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT_DETAIL:
            return {
                ...state,
                ...payload
            }
            case ActionTypes.REMOVE_PRODUCT_DETAIL:
            return {}
        default:
            return state;
    }
}


