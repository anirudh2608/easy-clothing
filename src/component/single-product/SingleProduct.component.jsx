import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { useDispatch, useSelector } from "react-redux"

import { addItemToCartStart } from "../../store/cart/cart.action"
import { setIsPopUpOpen } from "../../store/user/user.action"

import { selectCartItems } from "../../store/cart/cart.selector"
import { selectCurrentUser } from "../../store/user/user.selector"

import Button from "../button/Button.component"

import {
    Container,
    DetailsContainer,
    ImageContainer,
    InnerContainer,
    ProductImage,
    ProductName,
    ProductPrice
} from "./single-product.style"

const SingleProduct = ({ productData, singleProductHandler, productDataHandler }) => {

    const cartItems = useSelector(selectCartItems)
    const currentUser = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const ProductPopUpRef = useRef(null)

    const { thumbnail, price, title } = productData


    useOnClickOutside(ProductPopUpRef, () => {
        singleProductHandler(false)
        productDataHandler({})
    })

    const addProductToCart = () => {
        if (currentUser) {
            const { id } = currentUser
            dispatch(addItemToCartStart(cartItems, productData, id))
        } else {
            singleProductHandler(false)
            productDataHandler({})
            dispatch(setIsPopUpOpen(true))
        }

    }

    return (
        <Container>
            <InnerContainer ref={ProductPopUpRef}>

                <ImageContainer>
                    <ProductImage imgURL={thumbnail} />
                </ImageContainer>

                <DetailsContainer>
                    <ProductName>{title}</ProductName>
                    <ProductPrice>{`$ ${price}`}</ProductPrice>
                    <Button onClick={addProductToCart}>Add to cart</Button>
                </DetailsContainer>
            </InnerContainer>
        </Container>
    )
}

export default SingleProduct