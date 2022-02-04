import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  margin-top: 100px;

  background-color: var(--ligthblue);
  > * {
    margin: 0 auto;
    max-width: 1440px;
  }

  display: flex;
  flex-direction: column;
`;

export const EventsStatusContainer = styled.section`
  width: 100%;
  height: 100px;
  padding-top: 30px;
  padding-bottom: 15px;

  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const EventsListContainer = styled.section`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const EventsList = styled.ul`
  width: 100%;
  max-height: calc(100vh - 225px);
  height: 100%;
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  @media (max-width: 850px) {
    max-height: 700px;
    max-width: 400px;
  }
`;
