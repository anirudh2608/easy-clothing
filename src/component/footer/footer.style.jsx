import styled from "styled-components";
import { Link } from "react-router-dom"

export const FooterContainer = styled.div`
height: 25vh;
width: 100%;
line-height:25vh;
background-color: rgb(224, 224, 224);
text-align: center; 
`

export const FooterCopyrightContainer = styled.div`

`
export const FooterCopyright = styled.span`
font-weight: bold;

@media screen and (max-width:650px) {
    font-size:12px;
    }

@media screen and (max-width:450px) {
    font-size:10px;
    }

@media screen and (max-width: 375px) {
    font-size:9px;
    }

`
export const FooterCopyrightLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
`;
