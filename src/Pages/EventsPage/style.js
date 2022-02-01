import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--ligthblue);
`;

export const FakeHeader = styled.header`
  height: 100px;
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
  justify-content: center;
  width: 90%;
  max-width: 1500px;
  background-color: white;
  margin-top: 20px;
  padding: 20px;
  button {
    border: 1px solid var(--grey-0);
    color: var(--grey-50);
  }
  .Search {
    display: flex;
    background-color: var(--grey--50);
    width: 350px;
    button {
      background-color: var(--ligthorange);
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;
