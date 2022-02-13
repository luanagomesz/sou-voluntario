import styled, { css } from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  height: 100px;
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
  box-shadow: 1px 1px 10px 3px var(--ligthgrey);
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
    width: 300px;
    height: auto;
    margin-left: 0px;
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
      width: 90%;
      justify-content: space-between;
      max-width: 1000px;
      align-items: center;
    }
    a {
      font-size: 20px;
      :hover {
        color: var(--ligthorange);
      }
      img {
        width: 320px;
      }
    }
    .iconContainer {
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 40px;
    }
    .name_user {
      padding-left: 5%;
      border-left: 1px solid var(--ligthgrey);
      height: 60px;
      display: flex;
      align-items: center;
      text-align: right;
      color: var(--ligthorange);
      font-family: Cantata One;
      font-size: 20px;
    }
    .event {
      height: 60px;
      display: flex;
      align-items: center;
      padding-left: 5%;
      border-left: 1px solid var(--ligthgrey);
    }
    .icon {
      color: var(--darkblue);
      font-size: 25px;

      cursor: pointer;
      :hover {
        color: var(--ligthorange);
      }
    }
    .newEvent_desktop {
      width: 200px;
      height: 50px;
      position: relative;

      background-color: var(--ligthorange);
      color: white;
      font-weight: 600;
      font-size: 20px;
      border-radius: 5px;

      :hover {
        color: var(--ligthorange);
        background-color: white;
        border: 1px solid var(--ligthorange);
      }
    }
  }
  @media (max-width: 1000px) {
    .newEvent_desktop {
      width: 120px;
      font-size: 15px;
      height: 45px;
    }
    .event {
      padding-left: 0px;
      border-left: none;
    }
    a {
      font-size: 17px;
      img {
        width: 180px;
      }
    }
    .name_user {
      padding-left: 0px;
      border-left: none;
      font-size: 18px;
    }
  }
`;
export const MenuNav = styled.div`
  display: ${({ burguer }) => (burguer ? "none" : "flex")};
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 100px);
  background-color: white;
  position: fixed;
  overflow-y: hidden;
  z-index: 100;
  left: 0px;
  top: 100px;
  animation: fade;
  animation-duration: 500ms;

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
