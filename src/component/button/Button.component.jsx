import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    BannerButton,
    CartButtonSignIn,
    CartButtonSignUp,
    SignInButton
} from "./button.styles.jsx"

export const BUTTON_TYPE_CLASSES = {
    base:"base",
    sign_in: 'sign-in',
    google: 'google-sign-in',
    inverted: "inverted",
    banner: "banner",
    cart_sign_in: "cart_sign_in",
    cart_sign_up: "cart_sign_up",
}

const getButton = (buttonType=BUTTON_TYPE_CLASSES.base) =>
(
    {
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.sign_in]:SignInButton,
        [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
        [BUTTON_TYPE_CLASSES.banner]:BannerButton,
        [BUTTON_TYPE_CLASSES.cart_sign_in]:CartButtonSignIn,
        [BUTTON_TYPE_CLASSES.cart_sign_up]:CartButtonSignUp,
    }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}

export default Button