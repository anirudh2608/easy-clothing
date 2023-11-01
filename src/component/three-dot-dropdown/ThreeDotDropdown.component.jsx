import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

import { selectCurrentUser } from '../../store/user/user.selector';

import { updateCartItemsSuccess } from "../../store/cart/cart.action"
import { signOutStart } from "../../store/user/user.action"
import { setIsProfileDropdownOpen } from "../../store/user/user.action"

import {
    CartIcon,
    Container,
    Divider,
    LogOutIcon,
    OptionContainer,
    OptionName,
    ProfileIcon,
    ShopIcon,
    SignInIcon
} from "./three-dot-dropdown.style"

const ThreeDotDropdown = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentUser = useSelector(selectCurrentUser);

    const navigateTo = (path) => {
        navigate(path)
    }

    const signOut = () => {
        dispatch(setIsProfileDropdownOpen(!setIsProfileDropdownOpen))
        dispatch(signOutStart())
        dispatch(updateCartItemsSuccess([]))
    }

    return (
        <Container>

            {currentUser && <OptionContainer>
                <ProfileIcon />
                <OptionName>Profile</OptionName>
            </OptionContainer>}

                {currentUser && <Divider />}

            <OptionContainer onClick={()=>navigateTo("/shop")}>
                <ShopIcon />
                <OptionName>Shop</OptionName>
            </OptionContainer>

                <Divider />

            {!currentUser && <OptionContainer onClick={()=>navigateTo("/sign-in")}>
                <SignInIcon />
                <OptionName>Sign In</OptionName>
            </OptionContainer>}

                {!currentUser && <Divider />}

            <OptionContainer onClick={()=>navigateTo("/checkout")}>
                <CartIcon />
                <OptionName>Cart</OptionName>
            </OptionContainer>

                {currentUser && <Divider />}

            {currentUser && <OptionContainer onClick={signOut}>
                <LogOutIcon />
                <OptionName>Log Out</OptionName>
            </OptionContainer>}
        </Container>
    )
}

export default ThreeDotDropdown