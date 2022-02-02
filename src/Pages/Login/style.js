import styled from "styled-components";
import SouVoluntario from "../../Assets/souvol.svg";
import bgbottom from "../../Assets/bgbottom.png";
import bgtop from "../../Assets/bgtop.png";
import volunteers from "../../Assets/volunteers.svg";

export const BackgroundTop = styled.img.attrs({ src: `${bgtop}` })`
  position: absolute;
  z-index: 1;
  width: 75%;
  height: 50vh;
`;

export const BackgroundBottom = styled.img.attrs({ src: `${bgbottom}` })`
  position: absolute;
  z-index: 1;
  width: 70%;
  height: 50vh;
  right: 0px;
  bottom: 0px;

  @media screen (min-width: 760px) {
    width: 50%;
    height: 50vh;
  }

  @media screen (min-width: 1090px) {
    width: 30%;
    height: 50vh;
  } ;
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;
export const ContainerLogin = styled.div`
  position: absolute;
  display: block;
  z-index: 2;
  background-color: var(--ligthblue);
  border-radius: 8px;
  margin: 25px;
  height: 80%;
  width: 80%;
  align-items: center;
  align-content: space-around;
  justify-content: space-evenly;
  box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 760px) {
    display: flex;
  }
`;
export const ContainerForm = styled.div`
  display: block;
  border: none;
  width: 50%;
  align-items: center;
  justify-content: center;
  align-content: center;

  h1 {
    width: 100px;
    margin: auto;
    color: var(--ligthorange);
    font-family: "Cantata One";
    margin-bottom: 100px;
  }

  @media screen and (max-width: 760px) {
    h1 {
      display: none;
    }
    width: 100%;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;

  .volunteers {
    max-width: 500px;
  }

  .logo {
    width: 55%;
  }

  button {
    background: none;
    color: var(--grey-50);
  }
  @media screen and (max-width: 760px) {
    button {
      display: none;
    }
    .volunteers {
      display: none;
    }
  }
`;
export const Input = styled.div`
  width: 255px;
  p {
    margin-top: 30px;
  }
`;

export const Button = styled.button`
  background: var(--ligthorange);
  border-radius: 25px;
  height: 50px;
  width: 215px;
  color: #fff;
  margin-top: 35px;
`;
