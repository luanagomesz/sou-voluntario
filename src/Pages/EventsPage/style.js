import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--ligthblue);
  .result {
    margin-top: 10px;
    margin-bottom: -10px;
    font-size: 15px;
    color: var(--grey-50);
  }
`;

export const FakeHeader = styled.header`
  height: 51px;
  display: flex;
  background-color: white;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  max-width: 1500px;
  background-color: white;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .button {
    width: 20%;
    button {
      width: 100%;
    }
  }
  button {
    background-color: white;
    border: 1px solid #dedede;
    padding: 8px;
    color: var(--grey-50);
    width: 20%;
    max-width: 200px;
    border-radius: 10px;
  }
  .search {
    display: flex;
    flex-wrap: nowrap;
    background-color: var(--grey-0);
    width: 20%;
    height: 50px;
    align-items: center;
    border-radius: 8px;
    justify-content: center;
    padding-right: 5px;
    padding-left: 10px;
    button {
      background-color: var(--ligthorange);
      width: 50px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    input {
      width: 80%;
      background-color: var(--grey-0);
      border: none;
      color: var(--grey-100);
      font-size: 16px;
    }
  }
  @media (max-width: 850px) {
    box-shadow: none;
    margin-top: 0px;
    width: 100%;
    border-top: 1px solid var(--grey-0);
    .button {
      display: none;
    }
    #donation {
      display: none;
    }
    .search {
      width: 70%;
      height: 40px;
      button {
        height: 30px;
        width: 40px;
      }
      input {
        width: 90%;
        color: var(--grey-100);
        background-color: var(--grey-0);
      }
    }
  }
`;

export const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  align-items: center;
  justify-content: center;
  max-height: 700px;
  overflow-y: auto;
  max-width: 1600px;

  @media (max-width: 850px) {
    max-height: 700px;
    max-width: 400px;
  }
`;
