import { useSelector, useDispatch } from "react-redux"

import { selectCurrentUser } from "../../store/user/user.selector"
import { selectProfileDropdown } from "../../store/user/user.selector"

import { setIsProfileDropdownOpen } from "../../store/user/user.action"
import { signOutStart } from "../../store/user/user.action"

import {
    DropdownHeading,
    DropdownItems,
    LogoutIcon,
    ProfileIcon,
    SignInDownContainer
} from "./sign-in-profile-dropdown.style"
import { updateCartItemsSuccess } from "../../store/cart/cart.action"


const SignInProfileDropdown = () => {

    const dispatch = useDispatch()

    const isProfileDropdownOpen = useSelector(selectProfileDropdown)
    const { displayName } = useSelector(selectCurrentUser)

    const signOut = () => {
        dispatch(setIsProfileDropdownOpen(!isProfileDropdownOpen))
        dispatch(signOutStart())
        dispatch(updateCartItemsSuccess([]))
    }

    return (
        <SignInDownContainer>

            <DropdownItems>
                <ProfileIcon />
                <DropdownHeading>{displayName}</DropdownHeading>
            </DropdownItems>

            <DropdownItems onClick={signOut}>
                <LogoutIcon />
                <DropdownHeading>Sign Out</DropdownHeading>
            </DropdownItems>

        </SignInDownContainer>
    )
}

export default SignInProfileDropdown