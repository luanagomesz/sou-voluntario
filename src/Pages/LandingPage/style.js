import styled from "styled-components";

export const Header = styled.header`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    cursor: pointer;
  }
  h3 {
    font-size: 20px;
    color: var(--darkblue);
    cursor: pointer;
    :hover {
      color: var(--cyan);
    }
  }

  button {
    background-color: var(--ligthorange);
    padding-bottom: 10px;
    padding-top: 10px;
    border-radius: 13px;
    margin-right: 10px;
    color: white;
    width: 100px;
    text-align: center;
    :hover {
      background-color: var(--orange);
    }
  }

  .register {
    margin-left: 15px;
    background-color: var(--grey-50);
    padding-bottom: 10px;
    padding-top: 10px;
    color: white;
    :hover {
      background-color: var(--grey-0);
      border: 2px solid var(--grey-50);
      color: var(--grey-100);
    }
  }
  .menu {
    display: none;
  }
  .icon-menu {
    display: none;
  }

  @media (max-width: 1080px) {
    justify-content: space-between;
    img {
      width: 50%;
      min-width: 180px;
      max-width: 356px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .textH {
      display: none;
    }
    .menu {
      display: block;
    }
    .login {
      display: none;
    }
    .register {
      display: none;
    }
    .icon-menu {
      display: block;
      font-size: 40px;
      margin-left: 30px;
      :hover {
        color: var(--cyan);
      }
    }
  }
`;

export const PageContainer = styled.div`
  width: 100vw;
  height: fit-content;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bottomButton {
    background-color: var(--ligthorange);
    color: white;
    width: 700px;
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 50px;
    margin-right: 25%;
    margin-bottom: 120px;
    @media (max-width: 1080px) {
      width: 300px;
      margin-right: 0px;
      font-size: 20px;
    }
  }
`;

export const TopPage = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @keyframes goDown {
    from {
      transform: translateY(-15px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeToLeft {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes fadeToRigth {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .girl1 {
    min-width: 270px;
    max-width: 400px;
    width: 30%;
    height: auto;
    animation-name: fadeToLeft;
    animation-duration: 1.5s;
  }
  .girl2 {
    min-width: 270px;
    max-width: 400px;
    width: 25%;
    height: auto;
    animation-name: fadeToRigth;
    animation-duration: 1.5s;
  }
  div {
    width: 60%;
    max-width: 768;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    text-align: center;
    animation-name: fade;
    animation-duration: 1.5s;

    h1 {
      font-family: Cantata One;
      font-weight: normal;
      width: 100%;
      font-size: 70px;
    }

    span {
      margin-top: 100px;
      font-size: 50px;

      animation-name: goDown;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
      svg {
        cursor: pointer;
        :hover {
          color: var(--cyan);
        }
      }
    }
  }

  .IconBottom {
    display: none;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 100px;
    .girl2 {
      display: none;
    }
    .girl1 {
      min-width: 220px;
      animation-name: fade;
      animation-duration: 1.5s;
    }
    div {
      width: 90%;
      max-width: 630px;
      margin-top: 20px;
      h1 {
        font-size: 50px;
        font-size: 8vmin;

        border-bottom: 2px solid var(--grey-0);
        margin-bottom: 10px;
      }
      .Icontop {
        display: none;
      }
    }
    .IconBottom {
      display: block;
      font-size: 30px;
      margin-top: 20px;
      animation-name: goDown;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
      :hover {
        color: var(--cyan);
      }
    }
  }
`;

export const MiddlePage = styled.div`
  width: 80%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--ligthblue);
  margin-bottom: 30px;
  height: 700px;
  margin-top: 40px;

  .HandBottom {
    display: none;
    @keyframes fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  img {
    width: 30%;
    margin-right: 70px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    height: 80%;
    width: 50%;
    text-align: center;
    h2 {
      font-family: Cantata One;
      font-weight: normal;
      width: 100%;
      font-size: 70px;
    }
    p {
      margin-top: 25px;
      font-size: 20px;
    }
  }
  .containerbutton {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    button {
      background-color: var(--grey-50);
      color: white;
      width: 280px;
      margin-right: 20px;
      border-radius: 15px;
      font-size: 20px;
      padding: 15px;
      padding-left: 0px;
      padding-right: 0px;
      margin-top: 30px;
      :hover {
        background-color: var(--grey-0);
        border: 2px solid var(--grey-50);
        color: var(--grey-100);
      }
    }
  }
  @media (max-width: 1080px) {
    width: 100%;
    border-radius: 0px;
    margin-top: 0px;
    flex-direction: column;
    height: 800px;
    justify-content: center;
    align-items: center;
    .HandTop {
      display: none;
    }
    img {
      width: 30%;
      min-width: 150px;
      margin-right: 0px;
    }

    div {
      width: 90%;
      margin-top: -90px;
      h2 {
        font-size: 50px;
        font-size: 9vmin;
      }
      p {
        margin-bottom: 20px;
        font-size: 18px;
      }
    }
    .HandBottom {
      display: block;
      width: 150px;
    }
    .containerbutton {
      flex-direction: column;
      margin-top: 20px;
      button {
        margin-right: 0px;
        font-size: 20px;
        padding: 10px;
      }
    }
  }
`;

export const BottomPage = styled.div`
  width: 85%;
  display: flex;

  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  img {
    min-width: 300px;
    max-width: 800px;
    height: auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    text-align: center;
    h1 {
      font-size: 60px;
      font-family: Cantata One;
      font-weight: normal;
      margin-bottom: 40px;
    }
    .cardContainer {
      display: flex;
      width: 100%;

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: baseline;
        width: 350px;
        margin-right: 10px;
        margin-left: 10px;
        text-align: center;

        h3 {
          font-size: 23px;
          width: 60%;
          min-width: 128px;
          max-width: 128px;
        }
        p {
          margin-top: 20px;
          font-size: 18px;
          padding: 10px 0px 10px 0px;
          height: 140px;
          max-width: 200px;
          min-width: 150px;
        }
        span {
          font-size: 15px;

          span {
            font-size: 25px;
            color: var(--ligthorange);
            font-weight: bold;
          }
        }
      }
      .card:nth-child(2) {
        border-left: 1px solid var(--grey-0);
        border-right: 1px solid var(--grey-0);
      }
    }
  }
  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    width: 100%;

    img {
      min-width: 400px;
      width: 60%;
    }
    .container {
      width: 90%;
      h1 {
        margin-bottom: 10px;
        font-size: 9vmin;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--grey-0);
      }
      .cardContainer {
        flex-direction: column;
        align-items: center;
        .card:nth-child(2) {
          border-left: none;
          border-right: none;
          p {
            height: 90px;
          }
        }
        .card {
          width: 80%;
          margin-bottom: 15px;
          margin-right: 0px;
          margin-left: 0px;
          padding-bottom: 20px;
          border-bottom: 2px solid var(--grey-0);
          h3 {
            width: 100%;
            max-width: 400px;
          }
          p {
            margin-top: 10px;
            max-width: 400px;
            width: 100%;
            height: 120px;
          }
        }

        .card:nth-child(3) {
          p {
            height: 80px;
          }
        }
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  min-height: 80px;
  width: 100%;
  background-color: var(--ligthblue);
  align-items: center;
  justify-content: center;
  padding: 30px;
  p {
    margin-right: 10px;
  }
  div {
    display: flex;
    align-items: center;
    border-right: 2px solid var(--grey-0);
    border-left: 2px solid var(--grey-0);

    p {
      margin-right: 20px;
      margin-left: 10px;
    }
    .github {
      width: 43px;
    }
  }
  img {
    width: 35px;
  }
  @media (max-width: 1080px) {
    display: none;
  }
`;
