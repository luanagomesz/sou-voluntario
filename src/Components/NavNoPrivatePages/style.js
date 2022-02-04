import styled from "styled-components";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";

export const Container = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 200;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 1024) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
`;

export const IconHome = styled(FaHome)`
  width: 80%;
  height: 80%;
  color: #fff;
`;

export const IconSignin = styled(FaSignInAlt)`
  width: 80%;
  height: 80%;
  color: #fff;
`;

export const IconRegister = styled(FaUserPlus)`
  width: 80%;
  height: 80%;
  color: #fff;
`;
