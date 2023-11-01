import { ButtonContainer, Container, EmptyBagImage, EmptyMessage, MessageContainer, ShopNow } from "./empty-bag.style"

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

import { selectCurrentUser } from '../../store/user/user.selector';

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component"

import Empty_Bag_Image from "../../assets/Empty_basket.svg"

const EmptyBag = () => {

    const navigate = useNavigate()

    const currentUser = useSelector(selectCurrentUser);

    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <Container>
            <EmptyBagImage imgURL={Empty_Bag_Image} />
            <MessageContainer>
                <EmptyMessage>Your Basket is empty</EmptyMessage>
                <ShopNow to="/shop">Shop Now</ShopNow>
                {!currentUser && <ButtonContainer>
                    <Button
                        onClick={() => navigateTo("/sign-in")}
                        buttonType={BUTTON_TYPE_CLASSES.cart_sign_in}
                    >Sign In to your account</Button>

                    <Button
                        onClick={() => navigateTo("/sign-up")}
                        buttonType={BUTTON_TYPE_CLASSES.cart_sign_up}
                    >Sign Up now</Button>
                </ButtonContainer>}
            </MessageContainer>
        </Container>
    )
}

export default EmptyBag