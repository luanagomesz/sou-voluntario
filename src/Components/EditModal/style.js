import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: rgba(51, 51, 51, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  align-items: center;
  z-index: 100000000000;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const ModalContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding-bottom: 30px;
  padding-top: 30px;
  border-radius: 5px;
  svg {
    position: absolute;
    margin-top: -183px;
    margin-left: 283px;
    font-size: 25px;
    z-index: 118;
    cursor: pointer;
    :hover {
      color: var(--cyan);
    }
  }
  textarea {
    width: 80%;
    height: 80px;
    border: none;
    border-radius: 5px;
    background-color: var(--ligthgrey);
    resize: none;
    padding: 4px;

    ::placeholder {
      font-size: 18px;
    }
  }
  button {
    margin-top: 20px;
    width: 80%;
    background-color: var(--ligthorange);
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--ligthorange);
    :hover {
      background-color: white;
      color: var(--ligthorange);
    }
  }
`;
