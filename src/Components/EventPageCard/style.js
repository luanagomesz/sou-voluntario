import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
  padding-bottom: 10px;
  margin-right: 40px;
  min-height: 394px;
  animation-name: fade;
  animation-duration: 0.5s;
  .ong {
    width: 90%;
    font-size: 15px;
    color: var(--grey-50);
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .imgContainer {
    border-radius: 8px;
    width: 100%;
    position: relative;
    border-radius: 8px;

    img {
      width: 300px;
      height: 200px;
      border-radius: 8px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
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

      svg {
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }

  p {
    width: 90%;
    margin-bottom: 15px;
  }
  .bottomDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: 90%;
    margin-top: 3%;
    p {
      margin-left: 10px;
      margin-bottom: 0px;
      max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    button {
      background-color: var(--cyan);
      color: white;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid var(--cyan);
      :hover {
        background-color: white;
        color: var(--cyan);
      }
    }
  }
  @media (max-width: 850px) {
    width: 280px;
    margin-right: 0px;
    .imgContainer {
      .containerType {
        margin-top: 150px;
      }
    }

    .bottomDiv {
      button {
        font-size: 15px;
        padding-right: 8px;
        padding-left: 8px;
      }
    }
  }
`;
