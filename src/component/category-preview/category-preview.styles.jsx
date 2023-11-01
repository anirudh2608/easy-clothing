import styled from "styled-components"

export const CategoryPreviewContainer = styled.div`
display: flex;
flex-direction: column;
margin: 15px;

@media screen and (max-width:800px) {
    align-items: center;
}
`;

export const Title = styled.span`
font-size: 28px;
margin-bottom: 25px;
cursor: pointer;
`;

export const Priview = styled.div`
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

`;