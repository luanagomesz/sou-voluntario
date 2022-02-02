import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100px;
  max-height: 200px;
  width: 18%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  max-width: 200px;
  z-index: 2;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    width: 98%;
    align-items: center;
    font-size: 15px;
    margin-bottom: 2px;
    label {
      margin-left: 10px;
      color: var(--darkblue);
    }
  }
`;
