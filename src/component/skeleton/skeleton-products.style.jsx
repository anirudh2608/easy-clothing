import styled from "styled-components"

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
row-gap: 50px;
margin: 15px;

@media screen and (max-width:1300px) {
    grid-template-columns: repeat(3, 1fr);
    }

@media screen and (max-width:1000px) {
    grid-template-columns: repeat(2, 1fr);
    }

@media screen and (max-width:800px) {
    width: 100%
    }

@media screen and (max-width:450px) {
    grid-template-columns: repeat(1, 1fr);
    }

`

export const SkeletonProductContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 300px;
padding: 10px;
border-radius: 10px;
background-color: #e9e9e9;
`
export const ImageContainer = styled.div`
width: 100%;
height: 85%;
margin-bottom: 5px;
`
export const Footer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 10%;
padding:5px;
`;
