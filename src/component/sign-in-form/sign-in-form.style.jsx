import styled from "styled-components"

export const SignIpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding: 10px;
    margin-top:20px;

    h1{
        margin:0;
        margin-left: 5px;
    }

    button {
        font-size: 15px;
        min-width: 48%;
        padding: 0px;
    }
}

@media screen and (max-width:350px) {

    button {
        font-size: 13px;
        min-width: 46%;
    }
}
`;

export const Heading = styled.h2`
font-weight: bold;
letter-spacing: 2px;
margin-top: 10px;
margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
justify-content: space-between;
margin-bottom: 30px;
`;

export const SignInError = styled.p`
color:red;
font-weight: bold;
text-align: center;
`