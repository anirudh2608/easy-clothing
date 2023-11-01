import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import CartItem from "../cart-item/CartItem.component"
import Button from "../button/Button.component"

import { selectCartItems } from "../../store/cart/cart.selector"

import { setIsCartOpen } from "../../store/cart/cart.action"

import {
    CartDropDownContainer,
    CartItems,
    EmptyMessage
} from "./cart-dropdown.styles.jsx"




const CartDropDown = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)

    const goToCheckoutHandler = () => {
        navigate('/checkout')
        dispatch(setIsCartOpen(false))
    }


    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item =>
                        <CartItem key={item.id} cartItem={item} />
                    )) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown