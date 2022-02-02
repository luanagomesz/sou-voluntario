import styled from "styled-components";
import bgtop from "../../assets/img/bgtop.png"
import bgbottom from "../../assets/img/bgbottom.png"

export const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundTop = styled.img.attrs({ src: `${bgtop}` })`
  position: absolute;
  z-index: 1;
  width: 75%;
  height: 43vh;
`;

export const BackgroundBottom = styled.img.attrs({ src: `${bgbottom}` })`
  position: absolute;
  z-index: 1;
  width: 70%;
  height: 31vh;
  right: 0px;
  bottom: 0px;
  `

export const Modal = styled.div`
  width: 75vw;
  height: 75vh;
  min-height: 480px;
  border-radius: 20px;
  background-color: #F4F8FB;
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: space-evenly;
  flex-wrap: wrap;
  z-index: 2;
  box-shadow: 0px 0px 6px -1px rgba(0,0,0,0.75);

  @media(max-width: 800px) {
    height: auto;
    flex-wrap: nowrap;
    flex-direction: column-reverse;
    padding-bottom:  10px;
  }
`;

export const Title = styled.h2`
  width: 90%;
  font-size: 20px;
`;

export const Button = styled.button`

`