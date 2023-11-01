import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    height: 50px;
    padding: 5px 11px;
    background-color: lightgray;
`

export const ProductImg = styled.div`
height: 30px;
width: 30px;
background-position: center; 
background-repeat: no-repeat; 
background-size: cover;
background-image: url(${props => props.imgURL});
`

export const ProductName = styled.span`
`