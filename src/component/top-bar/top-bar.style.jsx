import styled from "styled-components";


export const TopBarContainer = styled.div`
    height: 7vh;
    width: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InnerText = styled.span`
    color: white;
    font-weight: bold;

    @media screen and (max-width:650px){
        font-size: 14px;
        }
`

