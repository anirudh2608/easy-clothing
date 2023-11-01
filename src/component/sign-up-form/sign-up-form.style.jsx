import styled from "styled-components"

export const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
width: 380px;

@media screen and (max-width:400px) {
    width:360px;

    button {
        font-size: 15px;
        width: 41%;
        padding: 0px;
    }
}

@media screen and (max-width:350px) {
    width:310px;
}

`;

export const Heading = styled.h2`
margin: 10px 0;
`;

export const SignUpError = styled.p`
color:red;
font-weight: bold;
text-align: center;
`