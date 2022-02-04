import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  overflow-y: hidden;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    height: 100vh;
  }
`;
export const ModalContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  z-index: 2;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.5);
  animation-name: fade;
  animation-duration: 0.5s;
  #close {
    position: absolute;
    margin-right: -265px;
    margin-top: 3px;
    font-size: 30px;
    cursor: pointer;
    :hover {
      color: var(--cyan);
    }
  }
  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 5px;
  }

  h3 {
    color: var(--darkblue);
    font-size: 19px;
    margin-bottom: 5px;
  }
  span {
    font-size: 15px;
    color: var(--grey-50);
    margin-bottom: 5px;
  }
  p {
    width: 80%;
    margin-bottom: 10px;
  }
  .middleDiv {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    p {
      color: var(--grey-100);
      margin-bottom: 5px;
      font-weight: 600;
    }
    span {
      color: var(--ligthorange);
      width: 50%;
      font-size: 20px;
    }
    svg {
      color: var(--ligthorange);
      font-size: 30px;
      margin-bottom: 5px;
    }
  }
  button {
    background-color: var(--cyan);
    color: white;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    :hover {
      background-color: var(--darkblue);
    }
  }
  .bottomDiv {
    display: flex;
    width: 90%;
    align-items: center;
    padding-bottom: 15px;
    p {
      color: var(--grey-100);
      margin-left: 20px;
      margin-bottom: 0px;
    }
    svg {
      font-size: 20px;
    }
  }
`;
