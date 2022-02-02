import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #fff;
  height: 125px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  z-index: 100;
`;

export const NavLink = styled(Link)`
  color: var(--darkblue);
  text-decoration: none;
  align-items: center;
  margin-right: 80px;
  font-size: 22px;
  margin-left: 30px;
`;

export const Burger = styled(FaBars)`
  display: none;

  @media screen and (max-width: 1090px) {
    color: gray;
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
  width: 30%;

  .colorTheme {
    color: var(--ligthblue);
  }
  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  align-items: left;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: var(--darkblue);

  div {
    display: block;
    border-bottom: 1px solid #dedede;
    height: 60px;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .Logo {
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

export const ButtonLink = styled(Link)`
  border: none;
  width: 251px;
  height: 60px;
  background-color: var(--ligthorange);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    background-color: var(--darkorange);
  }
`;

export const User = styled.div`
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
    font-family: "Cantata One";
    border-left: 2px solid var(--grey-0);
    width: 20vw;
    color: var(--ligthorange);
    height: 75px;

    .userItems {
      margin-left: 35px;
    }

@media screen and (max-width: 1090px) {
display: none;
  }
`;
