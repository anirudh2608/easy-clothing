import styled from "styled-components";

import { ReactComponent as ProfileSvg } from "../../assets/user-profile.svg"
import { ReactComponent as LogoutSvg } from "../../assets/logout.svg"
import { ReactComponent as SignInSvg } from "../../assets/SignInSvg.svg"
import { ReactComponent as ShopSvg } from "../../assets/ShopSvg.svg"
import { ReactComponent as CartSvg } from "../../assets/shopping-bag.svg"


export const Container = styled.div`
    diplay: none;

@media screen and (max-width:650px){
    position: absolute;
    width: 100px;
    top: 43px;
    background-color: white;
    border: 1px solid black;
    padding: 5px;
    box-shadow: 0px 3px 5px -1px #ccc;
    border-radius: 10px 0px 10px 20px;
    }

@media screen and (max-width:550px){
    top: 32px;
    }
`
export const OptionContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    padding: 4px;
    // border-bottom: 1px solid black;
`
export const ShopIcon = styled(ShopSvg)`
    width: 15px;
    height: 15px;
`
export const ProfileIcon = styled(ProfileSvg)`
    width: 15px;
    height: 15px;
`
export const LogOutIcon = styled(LogoutSvg)`
    width: 15px;
    height: 15px;
`
export const SignInIcon = styled(SignInSvg)`
    width: 15px;
    height: 15px;
`
export const CartIcon = styled(CartSvg)`
    width: 15px;
    height: 15px;
`
export const OptionName = styled.span`
    font-size: 12px;
    font-weight:bold;
`

export const Divider = styled.div`
width: 90%;
margin: auto;
border-bottom: 1px solid #dee2e6!important;
`