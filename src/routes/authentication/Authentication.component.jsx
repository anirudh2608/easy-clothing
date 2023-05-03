import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";

import SignInForm from "../../component/sign-in-form/SignInForm.component";
import SignUpForm from "../../component/sign-up-form/SignUpForm.component";

import { AuthenticationContainer } from "./authentication.style.jsx"


const Authentication = () => {

    const navigate = useNavigate()

    const currentUser = useSelector(selectCurrentUser)

    useEffect(() => {
        document.title = "Easy Clothing - Sign In"
    }, [])

    useEffect(() => {
        if (currentUser) {
            navigate("/")
        }
    }, [currentUser])

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication