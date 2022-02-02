import styled from "styled-components";
import bgtop from "../../assets/img/bgtop.png"
import bgbottom from "../../assets/img/bgbottom.png"

export const Background = styled.div`
  width: 100vw;
  height: 100vh !important;
  overflow-y: hidden;
  overflow-x: hidden;

  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BackgroundTop = styled.img.attrs({ src: `${bgtop}` })`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
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
  max-width: 1200px;
  height: 75vh;
  max-height: 600px;
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