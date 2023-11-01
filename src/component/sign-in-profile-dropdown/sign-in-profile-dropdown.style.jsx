import styled from "styled-components"

import { ReactComponent as ProfileSvg } from "../../assets/user-profile.svg"
import { ReactComponent as LogoutSvg } from "../../assets/logout.svg"

export const SignInDownContainer = styled.div`
position: absolute;
width: 100px;
height: 70px;
display: flex;
flex-direction: column;
padding: 5px 0px;
border: 1px solid black;
background-color: white;
top: 55px;
right: 75px;
box-shadow: rgb(204, 204, 204) -8px 9px 5px -1px;
border-radius: 10px 0px 10px 20px;
z-index: 5;

@media screen and (max-width:800px) {
  top: 50px;
  right: 85px;
}
`;

export const DropdownItems = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
padding: 0px 10px 0px 5px;
margin-bottom:10px;
cursor:pointer;
&:hover {
  background-color: #D3D3D3;
}
`;

export const DropdownHeading = styled.span`
    font-size: 15px;
    font-weight:bold;
   
    
@media screen and (max-width:500px) {
  font-size: 12px;
} 

`;


export const ProfileIcon = styled(ProfileSvg)`
  width: 18px;
  height: 18px;

  @media screen and (max-width:500px) {
    width: 15px;
    height: 15px;
  } 
`;

export const LogoutIcon = styled(LogoutSvg)`
  width: 18px;
  height: 18px;

  @media screen and (max-width:500px) {
    width: 15px;
    height: 15px;
  } 
`;

export const Divider = styled.div`
width: 90%;
margin: auto;
border-bottom: 1px solid #dee2e6!important;
`