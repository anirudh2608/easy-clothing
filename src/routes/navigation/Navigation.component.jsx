import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from "react"

import { selectCurrentUser, selectProfileDropdown } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";
// import { setIsProfileDropdownOpen } from "../../store/user/user.action";

import CartIcon from "../../component/cart-icon/CartIcon.component"
import CartDropDown from "../../component/cart-dropdown/CartDropdown.component"
import SignInProfileIcon from "../../component/sign-in-profile-icon/SignInProfileIcon.component";
import SignInProfileDropdown from "../../component/sign-in-profile-dropdown/SignInProfileDropdown.component";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink
} from "./navigation.styles.jsx"



const Navigation = () => {

    const dispatch = useDispatch()
    const cartDropdownRef = useRef(null)
    // const profileDropdownRef = useRef(null)

    const currentUser = useSelector(selectCurrentUser);
    const isProfileDropdownOpen = useSelector(selectProfileDropdown);
    const isCartOpen = useSelector(selectIsCartOpen)

    useEffect(() => {
        let CartDropdownHandler = (e) => {
            if (!cartDropdownRef.current.contains(e.target)) {
                dispatch(setIsCartOpen(false))
            }
        }
        document.addEventListener("mousedown", CartDropdownHandler)
        return () => {
            document.removeEventListener("mousedown", CartDropdownHandler)
        }

    }, [])


    // useEffect(() => {
    //     let profileDropdownHandler = (e) => {
    //         if (!profileDropdownRef.current.contains(e.target)) {
    //             console.log("1")
    //             dispatch(setIsProfileDropdownOpen(false))
    //         }
    //     }
    //     document.addEventListener("mousedown", profileDropdownHandler)
    //     return () => {
    //         document.removeEventListener("mousedown", profileDropdownHandler)
    //     }
    // }, [])


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">Shop</NavLink>
                    {
                        (currentUser) ? (
                            <>
                                <SignInProfileIcon />
                                {isProfileDropdownOpen && <SignInProfileDropdown />}
                            </>
                        ) : (
                            <NavLink to="/auth">Sign In</NavLink>
                        )
                    }
                    <div ref={cartDropdownRef} >
                        <CartIcon />
                        {isCartOpen && <CartDropDown />}
                    </div>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation