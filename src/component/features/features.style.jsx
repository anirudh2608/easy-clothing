import styled from "styled-components";

import { ReactComponent as CODSVG} from "../../assets/COD.svg"
import { ReactComponent as ReturnSVG } from "../../assets/Return.svg"
import { ReactComponent as OrderSVG} from "../../assets/AnyTime.svg"
import { ReactComponent as ShippingSVG } from "../../assets/Shipping.svg"

export const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width:80%;
    margin: auto;
    margin-bottom: 10px;

    @media screen and (max-width:800px) {
        width:85%;
        }

    @media screen and (max-width:650px) {
        width:95%;
    }
    
    @media screen and (max-width:500px) {
        // width:100%;
        grid-template-columns: repeat(2, 1fr);
        }

`
export const FeaturesItemsContainer = styled.div`
    background-color: rgb(224, 224, 224);
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direcion: row;
    align-items: center;
    gap: 5px;

    @media screen and (max-width:500px) {
        padding: 10px;
        }

`

export const FeaturesItemInfo= styled.span`
font-size: 15px;
font-weight: bold;

@media screen and (max-width:800px) {
    font-size:12px;
    }

@media screen and (max-width:650px) {
    font-size:10px;
    }    

`

export const ShippingIcon = styled(ShippingSVG)`
  width: 44px;
  height: 44px;

  @media screen and (max-width:800px) {
    width: 38px;
    height: 38px;
    }

  @media screen and (max-width:650px) {
    width: 24px;
    height: 24px;
    }

`;

export const ReturnIcon = styled(ReturnSVG)`
width: 44px;
height: 44px;

@media screen and (max-width:800px) {
    width: 38px;
    height: 38px;
    }

  @media screen and (max-width:650px) {
    width: 24px;
    height: 24px;
    }
`;

export const CODIcon= styled(CODSVG)`
width: 44px;
height: 44px;

@media screen and (max-width:800px) {
    width: 38px;
    height: 38px;
    }

  @media screen and (max-width:650px) {
    width: 24px;
    height: 24px;
    }
`;

export const OrderIcon = styled(OrderSVG)`
width: 44px;
height: 44px;

@media screen and (max-width:800px) {
    width: 38px;
    height: 38px;
    }

  @media screen and (max-width:650px) {
    width: 24px;
    height: 24px;
    }
`;
