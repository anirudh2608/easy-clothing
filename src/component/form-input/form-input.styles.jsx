import styled, { css } from "styled-components"

const subColor = "grey"
const mainColor = "black"

const shrinkLabel = css`
top: -14px;
font-size: 15px;
color: ${mainColor};
`
export const FormInputLabel = styled.label`
color: ${subColor};
font-size: 16px;
font-weight: normal;
position: absolute;
pointer-events: none;
left: 5px;
top: 10px;
transition: 300ms ease all;

${({ shrink }) => shrink && shrinkLabel}

`;

export const Input = styled.input`
background: none;
background-color: white;
color: ${subColor};
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 100%;
border: none;
border-radius: 0;
border-bottom: 1px solid ${subColor};

&:focus {
  outline: none;
  -webkit-appearance: none;
  box-shadow: 0px 1px 7px 1px lightblue;
  -moz-box-shadow: 0px 1px 7px 1px lightblue;
  -webkit-box-shadow:0px 1px 7px 1px lightblue;
}

&:focus ~ ${FormInputLabel} {
  ${shrinkLabel};
}

@media screen and (max-width:400px) {
  width: 90%;
}

`;

export const Group = styled.div`
position: relative;
margin: 25px 0;
`;
