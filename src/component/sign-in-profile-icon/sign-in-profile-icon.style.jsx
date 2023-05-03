import styled from "styled-components"

import { ReactComponent as ProfileSvg } from "../../assets/user-profile.svg"

export const SignInProfileContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


export const ProfileIcon = styled(ProfileSvg)`
  width: 28px;
  height: 28px;
`;
