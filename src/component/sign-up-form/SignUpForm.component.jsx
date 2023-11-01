import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { signUpStart } from "../../store/user/user.action"

import { selectAuthError } from "../../store/user/user.selector"

import FormInput from "../form-input/FormInput.component"
import Button from "../button/Button.component"

import {
    SignUpContainer,
    Heading,
    SignUpError
} from "./sign-up-form.style.jsx"
import { useNavigate } from "react-router-dom"


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const authError = useSelector(selectAuthError)

    const [formFields, setFormField] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const [error, setError] = useState("")

    const resetFormFields = () => {
        setFormField(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let pattern = /^[A-Za-z]+$/;

        if (!pattern.test(displayName)) {
            setError("Name should not contain any Number or special characters.")
            return
        } else if (password.length < 6) {
            setError("Passwords should contain atleast 6 characters.")
            return
        } else if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        try {
            dispatch(signUpStart(email, password, displayName))
            resetFormFields()
            navigate('/sign-in')
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use.') {
                setError("Email is already in use.")
            } else {
                setError(error.code)
            }
        }


    }

    const changeHandler = (event) => {
        const { name, value } = event.target
        setFormField({ ...formFields, [name]: value })

    }

    useEffect(() => {
        if (authError)
            switch (authError.code) {
                case "auth/email-already-in-use":
                    setError("Email is already in use")
                    break
                default:
                    setError(authError.code)
            }
    }, [authError])

    return (
        <SignUpContainer>
            <Heading>Don't have an account</Heading>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={changeHandler}
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={changeHandler}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button>

                <SignUpError>{error}</SignUpError>

            </form>
        </SignUpContainer>
    )
}

export default SignUpForm