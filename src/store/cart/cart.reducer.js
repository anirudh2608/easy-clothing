import { CART_ACTION_TYPE } from "./cart.types"

const CART_INITIAL_STATE = {
    isCartOpen: false,
    isOrderPlaced: false,
    cartItems: [],
    error: null
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {

        case CART_ACTION_TYPE.UPDATE_CART_SUCCESS:
            return {
                ...state,
                cartItems: payload
            }

        case CART_ACTION_TYPE.FETCH_CART_ITEMS_SUCCESS:
            return {
                ...state,
                cartItems: payload
            }

        case CART_ACTION_TYPE.FETCH_CART_ITEMS_FAILED:
            return {
                ...state,
                error: payload
            }

        case CART_ACTION_TYPE.SET_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }

        case CART_ACTION_TYPE.SET_ORDER_PLACED:
            return {
                ...state,
                isOrderPlaced: payload
            }
        default:
            return state
    }

}