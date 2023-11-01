import styled from "styled-components";
import { Link } from "react-router-dom"


export const NewArrivalContainer = styled.div`
    width:100%;
    text-align: center;
    padding: 2% 10%;

    @media screen and (max-width:800px) {
        padding: 2% 7%;
        }

    @media screen and (max-width:600px) {
        padding: 2% 3%;
        }
`

export const Heading = styled.span`
    font-size: 20px;
    font-weight: bold;
`
export const ProductsContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 2% 4%;

    @media screen and (max-width:800px) {
        padding: 2% 0%;
        }

    @media screen and (max-width:450px) {
        grid-template-columns: repeat(1, 1fr);
        }
`
export const Product = styled.div`
    diplay: flex;
    flex-direction: column;
    height:300px;
    padding: 0% 1%;
    background-color: rgb(224, 224, 224);

    @media screen and (max-width:800px) {
        height: 260px;
        padding: 0%;
        }

    @media screen and (max-width:600px) {
        height: 210px;
        }

    @media screen and (max-width:450px) {
        height: 290px;
        padding: 0%;
        }

`
export const ProductImg = styled.div`
    height: 250px;
    width:75%;
    margin: auto;
    margin-bottom: 9px;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    background-image: url(${props => props.imgURL});

    @media screen and (max-width:800px) {
        height: 200px;
        width: 85%;
        }

    @media screen and (max-width:600px) {
        height: 150px;
        width: 85%;
        }

    @media screen and (max-width:450px) {
        height: 250px;
        width: 85%;
        }
`
export const ProductInfo = styled(Link)`
    font-weight: bold;
`
