import { useSelector, useDispatch } from "react-redux"
import { useRef} from "react"
import { useOnClickOutside } from 'usehooks-ts'

import { selectCurrentUser } from "../../store/user/user.selector"
import { selectProfileDropdown } from "../../store/user/user.selector"


import { setIsProfileDropdownOpen } from "../../store/user/user.action"
import { signOutStart } from "../../store/user/user.action"
import { updateCartItemsSuccess } from "../../store/cart/cart.action"

import {
    Divider,
    DropdownHeading,
    DropdownItems,
    LogoutIcon,
    ProfileIcon,
    SignInDownContainer
} from "./sign-in-profile-dropdown.style"


const SignInProfileDropdown = () => {

    const dispatch = useDispatch()

    const profileDropdownRef = useRef(null)

    const { displayName } = useSelector(selectCurrentUser)
    const isProfileDropdownOpen = useSelector(selectProfileDropdown)

    // const [firstName, setFirstName] = useState("")

    const getFirstName = (fullName) => {
        return (fullName.split(" ")[0])
    }

    const firstName = getFirstName(displayName)

    const signOut = () => {
        dispatch(setIsProfileDropdownOpen(false))
        dispatch(signOutStart())
        dispatch(updateCartItemsSuccess([]))
    }


    useOnClickOutside(profileDropdownRef, () => {
        if (isProfileDropdownOpen) {
            dispatch(setIsProfileDropdownOpen(false))
        }
    })

    return (
        <SignInDownContainer ref={profileDropdownRef}>

            <DropdownItems>
                <ProfileIcon />
                <DropdownHeading>{firstName}</DropdownHeading>
            </DropdownItems>

            <Divider />

            <DropdownItems onClick={signOut}>
                <LogoutIcon />
                <DropdownHeading>Sign Out</DropdownHeading>
            </DropdownItems>

        </SignInDownContainer>
    )
}

export default SignInProfileDropdown