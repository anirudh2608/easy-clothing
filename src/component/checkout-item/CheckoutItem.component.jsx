import { useDispatch, useSelector } from "react-redux"

import {
    addItemToCartStart,
    clearItemFromCartStart,
    removeItemFromCartStart
} from "../../store/cart/cart.action"

import { selectCartItems } from "../../store/cart/cart.selector"
import { selectCurrentUser } from "../../store/user/user.selector"


import {
    CheckoutItemContainer,
    ImageContainer,
    ItemImage,
    ItemInfo,
    ItemQuantity,
    Arrow,
    Value,
    RemoveButton
} from "./checkout-item.styles"


const CheckoutItem = ({ item }) => {

    const cartItems = useSelector(selectCartItems)
    const currentUser = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const { thumbnail, title, quantity, price } = item

    const clearItemHandler = () => {
        if (currentUser) {
            const { id } = currentUser
            dispatch(clearItemFromCartStart(cartItems, item, id))
        }
    }

    const addItemHandler = () => {
        if (currentUser) {
            const { id } = currentUser
            dispatch(addItemToCartStart(cartItems, item, id))
        }
    }

    const removeItemHandler = () => {
        if (currentUser) {
            const { id } = currentUser
            dispatch(removeItemFromCartStart(cartItems, item, id))
        }
    }

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <ItemImage src={thumbnail} alt={`${title}`} />
            </ImageContainer>
            <ItemInfo>{title}</ItemInfo>
            <ItemQuantity>
                <Arrow onClick={removeItemHandler} >&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler} >&#10095;</Arrow>
            </ItemQuantity>
            <ItemInfo className="price">{price}</ItemInfo>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton> 
        </CheckoutItemContainer>
    )
}

export default CheckoutItem