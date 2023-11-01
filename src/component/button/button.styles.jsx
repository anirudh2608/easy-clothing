import styled from "styled-components";

export const BaseButton = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}
`;

export const GoogleSignInButton = styled(BaseButton)`
  height: 30px;
  line-height: 30px;
  padding: 0 15px 0 15px;
  background-color: #4285f4;
  border-radius: 5px;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
background-color: white;
color: black;
border: 1px solid black;

&:hover {
  background-color: black;
  color: white;
  border: none;
}
`;

export const BannerButton = styled(BaseButton)`
min-width: 165px;
width: 165px;
background-color: white;
color: black;
border: 1px solid black;

&:hover {
  background-color: black;
  color: white;
  border: none;
}

@media screen and (max-width:650px) {
  min-width: 140px;
  width: 140px;
  padding: 0 30px 0 30px;
  font-size: 13px;
  line-height: 45px;
  height: 45px;
  }

@media screen and (max-width:450px) {
  min-width: 120px;
  width: 120px;
  padding: 0 25px 0 25px;
  font-size: 11px;
  line-height: 38px;
  height: 38px;
  }

`;

export const SignInButton = styled.button`
width: 100%;
height: 30px;
letter-spacing: 0.5px;
line-height: 30px;
padding: 0 15px 0 15px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
border-radius: 5px;
cursor: pointer;
display: flex;
justify-content: center;

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

`

export const CartButtonSignIn = styled.button`
  height: 31px;
  padding: 4px 32px; 
  color: #212529;
  background-color: #FFC107;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

export const CartButtonSignUp = styled(CartButtonSignIn)`
  background-color: #FFFFFF;
  border: 1px solid #212529;
`