import styled from "styled-components"

export const CheckoutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;

@media screen and (max-width:550px) {
    width: 85%;
  }
`;

export const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;
`;

export const ItemImage = styled.img`
width: 100%;
height: 100%;
`;

export const ItemInfo = styled.span`
width: 23%;

@media screen and (max-width:550px) {
    font-size: 15px;
  }
  
@media screen and (max-width:400px) {
    font-size: 11px;
  }

@media screen and (max-width:350px) {
    font-size: 10.5px;
  }

`;

export const ItemQuantity = styled.span`
width: 23%;
display: flex;

@media screen and (max-width:550px) {
    font-size: 14px;
  }

@media screen and (max-width:400px) {
    font-size: 11px;
  }

@media screen and (max-width:350px) {
    font-size: 10px;
  }

`;

export const Arrow = styled.div`
cursor: pointer;
`;

export const Value = styled.span`
margin: 0 10px;
`;

export const RemoveButton = styled.div`
padding-left: 12px;
cursor: pointer;
`;

