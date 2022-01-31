import styled from "styled-components";

export const FakeHeader = styled.header`
  width: 100vw;
  height: 130px;
  background-color: #fff;
  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

export const Main = styled.main`
  width: 100vw;
  min-height: calc(100vh - 130px);

  padding-bottom: 50px;

  background-color: var(--ligthblue);
  > * {
    margin: 0 auto;
    max-width: 1440px;
  }
`;

export const EventsStatusContainer = styled.section`
  width: 100%;
  height: 100px;
  padding-top: 30px;
  padding-bottom: 15px;
`;

export const EventsListContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

export const EventsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;
