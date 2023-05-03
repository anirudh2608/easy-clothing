import { useState } from "react"
import { useDispatch } from "react-redux"

import {
    emailSignInStart,
    googleSignInStart
} from "../../store/user/user.action"

import FormInput from "../form-input/FormInput.component"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component"

import {
    SignIpContainer,
    Heading,
    ButtonContainer
} from "./sign-in-form.style.jsx"


const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const dispatch = useDispatch()

    const [formFields, setFormField] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormField(defaultFormFields)
    }

    const SignInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password))
            resetFormFields()
        }
        catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    alert("No user found")
                    break
                case "auth/wrong-password":
                    alert("Please enter correct password")
                    break
                default:
                    console.log(error)
            }

        }


    }

    const changeHandler = (event) => {
        const { name, value } = event.target
        setFormField({ ...formFields, [name]: value })

    }

    return (
        <SignIpContainer>
            <Heading>Already have an account</Heading>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={changeHandler}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={changeHandler}
                    name="password"
                    value={password}
                />
                <ButtonContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>Google Sign In</Button>
                </ButtonContainer>

            </form>
        </SignIpContainer>
    )
}

export default SignInForm