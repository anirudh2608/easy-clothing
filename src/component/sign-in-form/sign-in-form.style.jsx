import styled from "styled-components"

export const SignIpContainer = styled.div`
display: flex;
flex-direction: column;
width: 380px;

@media screen and (max-width:800px) {
    margin-bottom: 15px
}

@media screen and (max-width:400px) {
    width:360px;

    button {
        font-size: 15px;
        min-width: 48%;
        padding: 0px;
    }
}

@media screen and (max-width:350px) {
    width:310px;

    button {
        font-size: 13px;
        min-width: 46%;
    }
}
`;

export const Heading = styled.h2`
margin: 10px 0;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
`;
