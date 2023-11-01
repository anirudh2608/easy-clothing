import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";

import SignUpForm from "../../component/sign-up-form/SignUpForm.component";

import { Container, CrownLogo, Divider, LinkToSignIn, SignUpContainer } from "./sign-up.style";

import Sign_In_Image from "../../assets/Sign_In_Image.webp"

const SignUp = () => {

    const navigate = useNavigate()

    const currentUser = useSelector(selectCurrentUser)

    useEffect(() => {
        document.title = "Easy Clothing - Sign Up"
    }, [])

    useEffect(() => {
        if (currentUser) {
            navigate("/")
        }
    }, [currentUser])

    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <Container imgURL={Sign_In_Image}>
            <SignUpContainer>
                <CrownLogo onClick={() => navigateTo("/")} />
                <SignUpForm />
                <Divider />
                <span>Already have an account?&nbsp; <LinkToSignIn to={"/sign-in"}>Sign In</LinkToSignIn></span>
            </SignUpContainer>
        </Container>
    )
}

export default SignUp