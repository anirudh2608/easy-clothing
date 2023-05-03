import { useSelector, useDispatch } from "react-redux"

import { setIsProfileDropdownOpen } from "../../store/user/user.action"

import { selectProfileDropdown } from "../../store/user/user.selector"

import { ProfileIcon, SignInProfileContainer } from "./sign-in-profile-icon.style"

const SignInProfileIcon = () => {

    const dispatch = useDispatch()
    const isProfileDropdownOpen = useSelector(selectProfileDropdown)

    const toggleProfileDropdown = () =>{
        dispatch(setIsProfileDropdownOpen(!isProfileDropdownOpen))
    }

    return (
        <SignInProfileContainer onClick={toggleProfileDropdown} >
            <ProfileIcon />
        </SignInProfileContainer>
    )
}

export default SignInProfileIcon