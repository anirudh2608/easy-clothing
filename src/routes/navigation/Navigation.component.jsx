import { Fragment, useState } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from "react"
import { useOnClickOutside } from 'usehooks-ts'

import { selectCurrentUser, selectProfileDropdown } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

import CartIcon from "../../component/cart-icon/CartIcon.component"
import CartDropDown from "../../component/cart-dropdown/CartDropdown.component"
import SignInProfileIcon from "../../component/sign-in-profile-icon/SignInProfileIcon.component";
import SignInProfileDropdown from "../../component/sign-in-profile-dropdown/SignInProfileDropdown.component";
import TopBar from "../../component/top-bar/TopBar.component";
import SearchBar from "../../component/search-bar/SearchBar.component";
import ThreeDotDropdown from "../../component/three-dot-dropdown/ThreeDotDropdown.component";


import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
    ThreedotsContainer,
    Dots,
    LogoIcon,
    ProfileSignInContainer
} from "./navigation.styles.jsx"



const Navigation = () => {

    const dispatch = useDispatch()
    const cartDropdownRef = useRef(null)
    const MenuDropdownRef = useRef(null)

    const currentUser = useSelector(selectCurrentUser);
    const isProfileDropdownOpen = useSelector(selectProfileDropdown);
    const isCartOpen = useSelector(selectIsCartOpen)

    const [isMenuOpen, setIsMenuOpen] = useState(false)



    const cartDropDownHandler = (boolean) => {
        console.log("here")
        dispatch(setIsCartOpen(boolean))
    }
    const menuDropDownHandler = (boolean) => {
        setIsMenuOpen(boolean)
    }

    useOnClickOutside(MenuDropdownRef, () => menuDropDownHandler(false))


    useOnClickOutside(cartDropdownRef, () => {
        if (isCartOpen) {
            cartDropDownHandler(false)
        }
    }
    )



    return (
        <Fragment>
            <TopBar />
            <NavigationContainer>
                <LogoContainer to="/">
                    <LogoIcon />
                </LogoContainer>
                <SearchBar />
                <NavLinks>
                    <NavLink to="/shop">Shop</NavLink>
                    {
                        (currentUser) ? (
                            <ProfileSignInContainer>
                                <SignInProfileIcon />
                                {isProfileDropdownOpen && <SignInProfileDropdown />}
                            </ProfileSignInContainer>
                        ) : (
                            <NavLink to="/sign-in">Sign In</NavLink>
                        )
                    }
                    <div ref={cartDropdownRef} >
                        <CartIcon />
                        {isCartOpen && <CartDropDown />}
                    </div>
                </NavLinks>

                <ThreedotsContainer
                    ref={MenuDropdownRef}
                onClick={() => { menuDropDownHandler(!isMenuOpen) }}
                >
                    <Dots />
                    <Dots />
                    <Dots />
                    {isMenuOpen && <ThreeDotDropdown />}
                </ThreedotsContainer>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation