import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #fff;
  height: 125px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 100;
`;

export const NavLink = styled(Link)`
  color: var(--darkblue);
  text-decoration: none;
  align-items: center;
  margin-right: 20px;

  :hover {
    color: var(--lightblue);
  }
`;

export const Burger = styled(FaBars)`
  display: none;
  color: var(--gray.300);

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const Button = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const ButtonLink = styled(Link)`
  border: none;
  background-color: var(--lightorange);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: var(--darkorange);
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;
