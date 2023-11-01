import styled from "styled-components"

export const Container = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0, 0, 0, 0.7);
transition: opacity 500ms;
visibility: visible;
opacity: 1;
z-index:99999999999;
`
export const InnerContainer = styled.div`
display: flex;
flex-direction: column;
gap:20px;
margin: 70px auto;
padding: 10px;
background: #fff;
border-radius: 5px;
width: 20%;
position: relative;
// transition: all 5s ease-in-out;
align-items: center;


@media screen and (max-width:1200px) {
    width: 25%;
}

@media screen and (max-width:1000px) {
    width: 30%;
}

@media screen and (max-width:850px) {
    width: 35%;
}

@media screen and (max-width:700px) {
    width: 40%;
}

@media screen and (max-width:600px) {
    width: 50%;
}
@media screen and (max-width:500px) {
    width: 60%;
}

@media screen and (max-width:600px) {
    width: 70%;
}
`

export const ImageContainer = styled.div`
padding: 10px;
`

export const ProductImage = styled.div`
height: 150px;
width: 250px;

@media screen and (max-width:1200px) {
    width: 230px;
}

@media screen and (max-width:350px) {
    width: 190px;
}

background-position: center; 
background-repeat: no-repeat; 
background-size: cover;
background-image: url(${props => props.imgURL});
`

export const DetailsContainer = styled.div`
height: 150px;
display: flex;
flex-direction: column;    
justify-content: space-evenly;
`
export const ProductName = styled.h1`
margin: 0;
@media screen and (max-width:350px) {
    font-size: 28px;
}
`
export const ProductPrice = styled.span`
font-style: italic;

`