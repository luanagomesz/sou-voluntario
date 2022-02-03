import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: rgba(51, 51, 51, 0.5);
  width: 100 vw;
  height: 100 vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
`;
export const ModalContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: var(--darkblue);
    font-size: 20px;
  }
  span {
    font-size: 15px;
    color: var(--grey-50);
  }
  p {
    width: 70%;
  }
  .middleDiv {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: var(--grey-100);
    }
    span {
      color: var(--ligthorange);
    }
  }
  .bottomDiv {
    display: flex;
    width: 90%;
  }
`;
