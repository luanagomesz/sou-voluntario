import styled from "styled-components";

export const FakeHeader = styled.header`
  width: 100%;
  height: 130px;
  background-color: #fff;
  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 130px);
  background-color: var(--ligthblue);
`;

export const EventsTypeContainer = styled.section`
  width: 100%;
  height: 100px;
  padding: 30px 20px 15px;
`;
