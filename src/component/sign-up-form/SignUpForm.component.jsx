import { useState } from "react"
import { useDispatch } from "react-redux"

import { signUpStart } from "../../store/user/user.action"

import FormInput from "../form-input/FormInput.component"
import Button from "../button/Button.component"

import {
    SignUpContainer,
    Heading
} from "./sign-up-form.style.jsx"


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const dispatch = useDispatch()

    const [formFields, setFormField] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormField(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("please enter correct password")
        }       
        try {
            dispatch(signUpStart(email, password, displayName))
            resetFormFields()
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email is already in use.")
            } else {
                console.log(error)
            }
        }


    }

    const changeHandler = (event) => {
        const { name, value } = event.target
        setFormField({ ...formFields, [name]: value })

    }

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

            </form>
        </SignUpContainer>
    )
}

export default SignUpForm