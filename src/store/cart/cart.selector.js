import { createSelector } from "reselect"

const selectCartReducer = (state) => state.cartItem

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectIsOrderPlaced = createSelector(
    [selectCartReducer],
    (cart) => cart.isOrderPlaced
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) =>
        total + cartItem.quantity
        , 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) =>
        total + cartItem.quantity * cartItem.price
        , 0)
)

