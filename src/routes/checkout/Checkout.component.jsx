import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import CheckoutItem from "../../component/checkout-item/CheckoutItem.component"
import Button from "../../component/button/Button.component"
import PopUp from "../../component/pop-up/PopUp.component"

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector"
import { selectCurrentUser, selectIsPopUpOpen } from "../../store/user/user.selector"

import { placeCartOrderStart } from "../../store/cart/cart.action"
import { setIsPopUpOpen } from "../../store/user/user.action"

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    TotalAmount
} from "./checkout.styles.jsx"

import { POP_UP_TYPE } from "../../component/pop-up/popUpTypes"



const Checkout = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const isOrderPlaced = useSelector(selectIsPopUpOpen)
    const currentUser = useSelector(selectCurrentUser)



    const cartOrderPlaceHandler = () => {
        if (currentUser) {
            const { id } = currentUser
            dispatch(placeCartOrderStart(id))
            dispatch(setIsPopUpOpen(true))
        }
    }

    useEffect(() => {
        document.title = "Easy Clothing - Checkout"
    }, [])

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {cartItems.map(item =>
                <CheckoutItem key={item.id} item={item} />)}
            <TotalAmount>Total : ${cartTotal}</TotalAmount>
            {(cartItems.length !== 0) && <Button onClick={cartOrderPlaceHandler}>Pay now</Button>}

            {isOrderPlaced && <PopUp popUpType={POP_UP_TYPE.CHECKOUT_IN_POP_UP} />}

        </CheckoutContainer>

    )
}

export default Checkout