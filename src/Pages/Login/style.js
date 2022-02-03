import styled from "styled-components";
import bgbottom from "../../Assets/bgbottom.png";
import bgtop from "../../Assets/bgtop.png";

export const Container = styled.div`
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
`;

export const ContainerLogin = styled.div`
  width: 75vw;
  max-width: 1200px;
  height: auto;
  max-height: 600px;
  min-height: 480px;
  border-radius: 20px;
  background-color: #f4f8fb;
  padding: 0 2vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);

  @media (min-width: 1024px) {
    height: 75vh;
    flex-direction: row;
    padding-bottom: 10px;
    padding-top: 70px;
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  border: none;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    width: 100px;
    text-align: center;
    color: var(--ligthorange);
    margin-bottom: 40px;
  }

  @media (max-width: 1023px) {
    h1 {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 300px;
`;

export const VolunteersImage = styled.img`
  display: none;
  min-width: 350px;
  width: 90%;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const ButtonNoAccountForm = styled.button`
  background: none;
  color: var(--grey-50);
  margin-top: 20px;
  margin-bottom: 15px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ButtonNoAccountInfo = styled.button`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    background: none;
    color: var(--grey-50);
  }
`;
