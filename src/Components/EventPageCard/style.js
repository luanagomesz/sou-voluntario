import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .imgContainer {
    width: 100%;
    img {
      width: 100%;
    }
    .containerType {
      position: absolute;
      margin-top: 160px;
      margin-left: 10px;
      background-color: var(--cyan);
      color: white;
      padding: 5px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  p {
    width: 90%;
  }
  .bottomDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: 90%;
    p {
      max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
