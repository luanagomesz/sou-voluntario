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
  background-color: var(--lightblue);
  border-radius: 8px;
  border: 2px solid black;
  margin: 25px;
  height: 80%;
  width: 80%;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 760px) {
    display: flex;
  }
`;
export const ContainerForm = styled.div`
  width: 314px;

  background-color: var(--ligthblue);
  box-shadow: 5px;
  color: var(--darkblue);
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 35px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  input {
    background: var(--grey-0);
    color: #9398a2;
    width: 314px;
    height: 46px;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    font-size: 22px;
  }
`;

export const ContainerInfo = styled.div`
  display: block;

  .volunteers {
    max-width: 500px;
  }

  @media screen and (max-width: 760px) {
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
