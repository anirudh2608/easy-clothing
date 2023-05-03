import {
    CartItemContainer,
    ItemImage,
    ItemDetails,
    ItemName,
    ItemPrice
} from "./cart-item.styles.jsx"

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt={name} />
            <ItemDetails>
                <ItemName className="name">{name}</ItemName>
                <ItemPrice className="price">{quantity} x ${price}</ItemPrice>
            </ItemDetails>
        </CartItemContainer>
    )
}
export default CartItem