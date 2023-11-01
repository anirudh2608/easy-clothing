import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";

import SignInForm from "../../component/sign-in-form/SignInForm.component";
import { Container, CrownLogo, Divider, SignInContainer } from "./sign-in.style";
import Button, { BUTTON_TYPE_CLASSES } from "../../component/button/Button.component";

import Sign_In_Image from "../../assets/Sign_In_Image.webp"

const SignIn = () => {

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

    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <Container imgURL={Sign_In_Image}>
            <SignInContainer>
                <CrownLogo onClick={() => navigateTo("/")} />
                <SignInForm />
                <Divider />
                <span>New to our Site</span>
                <Button
                    onClick={() => navigateTo("/sign-up")}
                    buttonType={BUTTON_TYPE_CLASSES.sign_in}
                >Create your account</Button>
            </SignInContainer>
        </Container>
    )
}

export default SignIn