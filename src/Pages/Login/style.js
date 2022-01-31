import styled from "styled-components";
import SouVoluntario from "../../Assets/souvol.png";
import bgbottom from "../../Assets/bgbottom.png";
import bgtop from "../../Assets/bgtop.png";

export const BackgroundTop = styled.img.attrs({ src: `${bgtop}` })`
  position: absolute;
  z-index: 1;
  width: 83vw;
  height: 43vh;
`;

export const BackgroundBottom = styled.img.attrs({ src: `${bgbottom}` })`
  position: absolute;
  z-index: 1;
  width: 64vw;
  height: 31vh;
  right: 0;
  bottom: 0;
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
  z-index: 2;
  background-color: var(--ligthblue);
  border-radius: 8px;
  border: 2px solid black;
  margin: 25px;
  height: 80%;
  align-items: center;
  justify-content: center;
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
    background: #dedede;
    width: 314px;
    height: 46px;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    font-size: 22px;
  }
`;

export const ContainerInfo = styled.div`
  background-image: url("${SouVoluntario}");
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 100px;
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
