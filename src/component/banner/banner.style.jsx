import styled from "styled-components";

export const BannerContainer = styled.div`
position: relative;
height:88vh;
width:100%;
margin-bottom: 15px;
`
export const BannerDetailsContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width: 50%;
top: 25%;
left: 40px;

@media screen and (max-width:800px) {
    left: 30px;
    }

@media screen and (max-width:650px) {
    left: 20px;
    }

@media screen and (max-width:450px) {
    left: 10px;
    }
`

export const BannerImage = styled.div`
height: 88vh;
background-position: center; 
background-repeat: no-repeat; 
background-size: cover;

background-image: url(${props => props.imgURL});

@media screen and (max-width:600px) {
    background-image: url(${props => props.imgMob})
    }


`

export const BannerCaption = styled.span`
font-size: 15px;
font-weight: bold;

@media screen and (max-width:800px) {
    font-size: 10px;
    }

@media screen and (max-width:450px) {
    font-size: 7px;
    }
`
export const BannerSubCaption = styled.span`
font-size: 45px;
font-weight: bold;
margin-bottom: 10px;

@media screen and (max-width:800px) {
    font-size: 27px;
    }

@media screen and (max-width:650px) {
    font-size: 20px;
    }

@media screen and (max-width:450px) {
    font-size: 15px;
    }

@media screen and (max-width:375px) {
    font-size: 13px;
    }
`