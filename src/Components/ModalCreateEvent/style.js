import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: rgba(51, 51, 51, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
  z-index: 2;
`;
export const ModalContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 25px;
  border-radius: 5px;
  animation-name: fade;
  animation-duration: 0.5s;
  svg {
    position: absolute;
    font-size: 25px;
    margin-left: 280px;
    margin-top: -27.5px;
    color: var(--grey-100);
    z-index: 4;
    cursor: pointer;
    :hover {
      color: var(--ligthorange);
    }
  }
  input {
    width: 90%;
    font-size: 17px;
    padding: 10px;
    margin-bottom: 15px;
    background-color: var(--ligthgrey);
    border: none;
    border-radius: 5px;
    ::placeholder {
      color: var(--grey-50);
    }
  }
  .selectWork {
    display: flex;
    width: 90%;
    height: 50px;
    background-color: var(--ligthgrey);
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 15px;
    button {
      height: 75%;
      border-radius: 5px;
      width: 45%;
      background-color: var(--ligthgrey);
      color: var(--grey-50);
    }
    .selectedButton {
      background-color: var(--ligthorange);
      color: white;
    }
  }
  .middleDiv {
    display: flex;
    width: 85%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    .cointainerOption {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      select {
        margin-top: 5px;
        width: 110%;
        height: 25px;
        border-radius: 5px;
        background-color: var(--white);
        border: 1px solid var(--ligthgrey);
        color: var(--grey-100);
        max-height: 250px;
        option {
          color: var(--grey-100);
          border: 1px solid var(--ligthgrey);
          max-height: 400px;
        }
      }
    }
  }

  #textarea {
    width: 90%;
    padding-left: 5px;
    padding-top: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 8px;
    border: 1px solid var(--ligthgrey);
    font-size: 17px;
    resize: none;
    ::placeholder {
      color: var(--grey-50);
      font-size: 17px;
    }
  }
  .create {
    width: 70%;
    height: 35px;
    border-radius: 5px;
    background-color: var(--ligthorange);
    color: white;
    margin-bottom: 20px;
  }
`;
