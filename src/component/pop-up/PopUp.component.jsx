import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import Button from "../button/Button.component"

import { setIsPopUpOpen } from "../../store/user/user.action"

import { PopUpContainer, PopUpBox } from "./pop-up.style."
import { setIsOrderPlaced } from "../../store/cart/cart.action"


const PopUp = ({ popUpType }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { headingText, buttonText, route } = popUpType

    const goToPopUpHandler = () => {
        navigate(route)
        dispatch(setIsPopUpOpen(false))
        dispatch(setIsOrderPlaced(false))
    }

    return (
        <PopUpContainer>
            <PopUpBox>
                <h2>{headingText}</h2>
                <Button onClick={goToPopUpHandler}>{buttonText}</Button>
            </PopUpBox>
        </PopUpContainer>
    )
}

export default PopUp