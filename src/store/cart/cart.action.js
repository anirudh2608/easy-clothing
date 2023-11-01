import { CART_ACTION_TYPE } from "./cart.types";

export const setIsCartOpen = (bool) => {
    return ({
        type: CART_ACTION_TYPE.SET_CART_OPEN,
        payload: bool
    })
}

export const setIsOrderPlaced = (bool) => {
    return ({
        type: CART_ACTION_TYPE.SET_ORDER_PLACED,
        payload: bool
    })
}

const addCartItem = (cartItems, productToCart) => {

    const existingCartItem = cartItems.find((cartItem) =>
        cartItem.id === productToCart.id
    )

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === productToCart.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...productToCart, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) =>
        cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )

}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}


export const fetchCartItemsStart = (userId) => {
    return ({
        type: CART_ACTION_TYPE.FETCH_CART_ITEMS_START,
        payload: userId
    })
}

export const fetchCartItemsSuccess = (cartItems) => {
    return ({
        type: CART_ACTION_TYPE.FETCH_CART_ITEMS_SUCCESS,
        payload: cartItems
    })
}

export const fetchCartItemsFailed = (error) => {
    return ({
        type: CART_ACTION_TYPE.FETCH_CART_ITEMS_FAILED,
        payload: error
    })
}

export const addItemToCartStart = (cartItems, productToCart, currentUserId) => {
    const newCartItems = addCartItem(cartItems, productToCart)
    return ({
        type: CART_ACTION_TYPE.UPDATE_CART_START,
        payload: { newCartItems, currentUserId }
    })
}

export const removeItemFromCartStart = (cartItems, cartItemToRemove, currentUserId) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    return ({
        type: CART_ACTION_TYPE.UPDATE_CART_START,
        payload: { newCartItems, currentUserId }
    })
}

export const clearItemFromCartStart = (cartItems, cartItemToClear, currentUserId) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    return ({
        type: CART_ACTION_TYPE.UPDATE_CART_START,
        payload: { newCartItems, currentUserId }
    })
}

export const placeCartOrderStart = (currentUserId) => {
    const newCartItems = []
    return ({
        type: CART_ACTION_TYPE.UPDATE_CART_START,
        payload: { newCartItems, currentUserId }
    })
}

export const updateCartItemsSuccess = (cartItems) => {
    return ({
        type: CART_ACTION_TYPE.UPDATE_CART_SUCCESS,
        payload: cartItems
    })
}

export const updateCartItemsFailed = (error) => {
    return ({
        type: CART_ACTION_TYPE.UPDATE_CART_FAILED,
        payload: error
    })
}
