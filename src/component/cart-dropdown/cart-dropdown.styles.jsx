import styled from "styled-components"

export const CartDropDownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 5px;
border: 1px solid black;
background-color: white;
top: 55px;
right: 35px;
z-index: 5;

button {
    margin-top: auto;
  }

@media screen and (max-width:800px) {
  top: 50px;
  right: 42px;
  }

  @media screen and (max-width:550px) {
    button {
      font-size:12px;
    }
    
    }

`;

export const CartItems = styled.div`
height: 100%;
display: flex;
flex-direction: column;
overflow-x: hidden;
overflow-y: scroll;

`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;

`;
