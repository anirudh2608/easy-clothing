import { useDispatch, useSelector } from "react-redux"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { addItemToCartStart } from "../../store/cart/cart.action"
import { setIsPopUpOpen } from "../../store/user/user.action"

import { selectCartItems } from "../../store/cart/cart.selector"
import { selectCurrentUser } from "../../store/user/user.selector"

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component"

import {
    ProductCardContainer,
    ProductImage,
    Footer,
    ProductName,
    ProductPrice
} from "./product-card.styles.jsx"




const ProductCard = ({ product }) => {

    const cartItems = useSelector(selectCartItems)
    const currentUser = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const { title, price, thumbnail } = product

    const addProductToCart = () => {
        if (currentUser) {
            const { id } = currentUser
            dispatch(addItemToCartStart(cartItems, {
                title,
                price,
                thumbnail,
                id: product.id
            }, id))
        } else {
            dispatch(setIsPopUpOpen(true))
        }

    }

    return (
        <ProductCardContainer>

            <ProductImage>
                <LazyLoadImage
                    loading='lazy'
                    src={thumbnail}
                    alt={title}
                    height="100%"
                    width="100%"
                    effect='blur'
                />
            </ProductImage>

            <Footer>
                <ProductName>{title}</ProductName>
                <ProductPrice>{`$ ${price}`}</ProductPrice>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard