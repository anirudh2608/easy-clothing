import {
    CartItemContainer,
    ItemImage,
    ItemDetails,
    ItemName,
    ItemPrice
} from "./cart-item.styles.jsx"

const CartItem = ({ cartItem }) => {
    
    const { title, thumbnail, quantity, price } = cartItem

    return (
        <CartItemContainer>
            <ItemImage src={thumbnail} alt={title} />
            <ItemDetails>
                <ItemName className="name">{title}</ItemName>
                <ItemPrice className="price">{quantity} x ${price}</ItemPrice>
            </ItemDetails>
        </CartItemContainer>
    )
}
export default CartItem