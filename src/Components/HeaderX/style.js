import styled, { css } from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  height: 125px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  position: fixed;
  z-index: 100;
  overflow-y: hidden;
  left: 0px;
  top: 0;
  width: 100%;
  /*   ${({ burguer }) =>
    burguer &&
    css`
      position: fixed;
      z-index: 100;
      overflow-y: hidden;
      left: 0px;
      top: 0;
      width: 100%;
    `} */

  img {
    width: 170px;
    margin-left: 20px;
  }
  .menu_button {
    width: 30px;
    background-color: transparent;
    margin-right: 25px;
    @media (min-width: 720px) {
      display: none;
    }
  }
  .menu_icon {
    width: 30px;
    height: 30px;
    @media (min-width: 720px) {
      display: none;
    }
  }
  .links {
    display: none;
  }
  .newEvent_mobile {
    min-width: 180px;
    height: 19px;
    display: flex;
    align-items: center;
  }
  @media (min-width: 720px) {
    a:visited {
      color: var(--darkblue);
    }
    .links {
      display: flex;
      width: 50%;
      justify-content: space-around;
      max-width: 660px;
    }
    .name_user {
      border-left: 1px solid var(--ligthgrey);
      min-width: 20%;
      max-width: 90px;
      text-align: right;
      color: var(--ligthorange);
    }
    .icon {
      margin-right: 5px;
      color: var(--grey-100);
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    .newEvent_desktop {
      width: 138px;
      height: 32px;
      position: relative;
      bottom: 4px;
      background-color: var(--ligthorange);
      color: white;
      font-weight: 600;
      border-radius: 5px;
    }
  }
`;
export const MenuNav = styled.div`
  display: ${({ burguer }) => (burguer ? "none" : "flex")};
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 125px);
  background-color: white;
  position: fixed;
  overflow-y: hidden;
  z-index: 100;

  left: 0px;
  top: 125px;

  .header_menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 125px;
    padding: 0.5rem;
  }
  button {
    width: 25px;
    height: 25px;
    margin-right: 30px;
    background: transparent;
  }
  .logo_menu {
    width: 170px;
  }
  .x_icon {
    width: 25px;
    height: 25px;
  }
  .box_link {
    display: flex;
    flex-direction: column;
    height: 50%;
  }
  .link_mobile,
  .newEvent_mobile {
    margin: 20px 0px 10px 20px;
    color: var(--darkblue);
    width: 100%;
    text-align: start;
  }
  a:visited {
    color: var(--darkblue);
  }
  .user_container {
    position: absolute;
    bottom: 0px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 15px 10px 0px 10px;
    border-top: 1px solid var(--ligthgrey);
  }
  .info_user {
    display: flex;
    min-width: 25%;
    align-items: center;
    justify-content: space-around;
    max-width: 110px;
  }
  .name_user {
    color: var(--ligthorange);
  }
  .icon {
    margin-right: 5px;
    color: var(--grey-100);
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  @media (min-width: 720px) {
    display: none;
  }
`;
export const Divisory = styled.div`
  width: 90%;
  height: 1px;
  background-color: var(--ligthgrey);
  align-self: center;
  border-radius: 5px;
`;
