import styled from "styled-components";

export const SearchContainer = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width:650px){
    width: 70%;
    }
`

export const Containerr = styled.div`
position: absolute;
max-height: 250px;
min-height: 0px;
width: 100%;
display: flex;
flex-direction: column;
top: 100%;
overflow-y: auto;
`

export const SearchInput = styled.input`
width: 100%;
height: 50px;
padding: 5px 11px;
background-color: lightgray;
border-radius: 5px;
font-size: 16px;
color: #0A0A0A;
border: 1px solid white;
outline: none;
transition: all .15s ease-in-out;

@media screen and (max-width:650px){
    width: 100%;
    height: 35px;
    }
`