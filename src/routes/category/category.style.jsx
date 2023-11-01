import styled from "styled-components"

export const OuterContainer = styled.div`
display: flex;
`

export const CategoryContainer = styled.div`
width:83%;
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

export const Title = styled.h2`
font-size: 38px;
margin-bottom: 25px;
text-align: center;

@media screen and (max-width:400px) {
    font-size: 34px;
    }

@media screen and (max-width:350px) {
    font-size: 32px;
    }
`;

export const FilterMenu = styled.span`
margin-left: 15px;
font-weight: bolder;
font-size: larger;
letter-spacing: 0.5px;
cursor:pointer;
visibility:hidden;

@media screen and (max-width:800px) {
    visibility: ${props => props.isFilterMenuOpen ? "hidden" : "visible"};
}

`