import styled from "styled-components"
import { Link } from "react-router-dom"

import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

export const NavigationContainer = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  z-index: 99999;
  box-shadow: 1px -6px 17px 0px;

  @media screen and (max-width:800px){
    height: 60px;
    padding:10px 20px;
  }

  @media screen and (max-width:550px){
    height: 40px;
    padding:8px 7px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 39px;
  width: 50px;

  @media screen and (max-width:800px){
    width: 50px;
    padding: 0px; 
  }

  @media screen and (max-width:650px){
    height: 29px;
    width: 39px;
  }
`;

export const LogoIcon = styled(CrownLogo)`
  height: 39px;
  width: 50px;

  @media screen and (max-width:800px){
    width: 50px;
    padding: 0px; 
  }

  @media screen and (max-width:650px){
    height: 29px;
    width: 39px;
  }
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;


  @media screen and (max-width:650px){
    display: none;
  }
`;

export const NavLink = styled(Link)`
  padding: 6px 6px;
  margin: 5px;
  border-bottom: 2px solid white;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;

  &:hover {
    border-bottom: 2px solid black;
  }
`;


export const ThreedotsContainer =styled.div`
  display: none;

@media screen and (max-width:650px){
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  }
`
export const Dots = styled.div`
  border: 2px solid black;
  border-radius: 25px;
`
export const ProfileSignInContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`