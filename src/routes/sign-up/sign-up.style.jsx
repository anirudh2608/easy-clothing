import styled from "styled-components"

import { ReactComponent as CrownSVG } from "../../assets/crown.svg"
import { Link } from "react-router-dom"

export const Container = styled.div`
height: 100%;
min-height: 100vh;

background-position: center;  
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
background-image: url(${props => props.imgURL});
padding-top:20px;
`

export const SignUpContainer = styled.div`
width: 25%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;

span{
    font-size: 16px;
    font-weight: 600;
}

@media screen and (max-width:1024px) {
    width: 40%;
}

@media screen and (max-width:768px) {
    width: 60%;
}

@media screen and (max-width:500px) {
    width: 70%;
}

@media screen and (max-width:425px) {
    width: 90%;
}

@media screen and (max-width:400px) {
    width: 100%;
}
`
export const CrownLogo = styled(CrownSVG)`
height: 39px;
width: 50px;
`
export const Divider = styled.div`
width: 100%;
margin-top: 20px;
margin-bottom: 20px;
border-bottom: 1px solid #dee2e6!important;
`
export const LinkToSignIn = styled(Link)`
cursor: pointer;
color: blue;
font-weight: bold;
`