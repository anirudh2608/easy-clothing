import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 6em;
// padding-top: 3em;

@media screen and (max-width:768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0em;
  }
`
export const MessageContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 3em;

@media screen and (max-width:768px) {
    margin-left: 0em;
  }
`

export const EmptyBagImage = styled.div`
width: 300px; 
height: 180px;

background-position: center; 
background-repeat: no-repeat; 
// background-size: cover;
background-image: url(${props => props.imgURL});

@media screen and (max-width:769px) {
    width: 450px; 
    height: 270px;
  }

@media screen and (max-width: 650px) {
    width: 400px; 
    height: 220px;
  }

@media screen and (max-width: 425px) {
    width: 320px; 
    height: 200px;
  }
`

export const EmptyMessage = styled.h1`
color:#212529;
font-size: 40px;
margin-bottom: 0px;

@media screen and (max-width:769px) {
    margin: 0px;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 650px) {
    letter-spacing: 0px;
  }

  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`
export const ShopNow = styled(Link)`
color: #0DCAF0;
font-size: 16px;
font-weight: bold;
cursor: pointer;
margin-bottom: 16px;

@media screen and (max-width: 425px) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`
export const ButtonContainer = styled.div`
    display:flex;
    gap: 5px;

    @media screen and (max-width: 390px) {
        flex-direction: column;
      }
`
