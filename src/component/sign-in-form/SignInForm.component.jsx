import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
    emailSignInStart,
    googleSignInStart
} from "../../store/user/user.action"

import { selectAuthError } from "../../store/user/user.selector"

import FormInput from "../form-input/FormInput.component"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.component"

import {
    SignIpContainer,
    ButtonContainer,
    SignInError
} from "./sign-in-form.style.jsx"


const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const dispatch = useDispatch()

    const authError = useSelector(selectAuthError)

    const [formFields, setFormField] = useState(defaultFormFields)
    const { email, password } = formFields

    const [error, setError] = useState("")

    const resetFormFields = () => {
        setFormField(defaultFormFields)
    }

    const SignInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }

    useEffect(() => {
        if (authError)
            switch (authError.code) {
                case "auth/user-not-found":
                    setError("No user found")
                    break
                case "auth/wrong-password":
                    setError("Please enter correct password")
                    break
                case "auth/email-already-in-use":
                    setError("Email is already in use")
                    break
                default:
                    setError(authError.code)
            }
    }, [authError])

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password))
            resetFormFields()
        }
        catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    setError("No user found")
                    break
                case "auth/wrong-password":
                    setError("Please enter correct password")
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
            <h1>Sign In</h1>
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
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.sign_in}>Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>Google Sign In</Button>
                </ButtonContainer>

                <SignInError>{error}</SignInError>

            </form>
        </SignIpContainer>
    )
}

export default SignInForm