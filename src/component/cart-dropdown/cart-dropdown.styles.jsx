import styled from "styled-components"

export const CartDropDownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
overflow: scroll;
z-index: 5;

button {
    margin-top: auto;
  }

@media screen and (max-width:800px) {
  top: 70px;
  right: 9%;
  }

  @media screen and (max-width:550px) {
    top: 60px;
    right: 7%;

    button {
      font-size:12px;
    }
    
    }

`;

export const CartItems = styled.div`
height: 240px;
display: flex;
flex-direction: column;

`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;

`;
