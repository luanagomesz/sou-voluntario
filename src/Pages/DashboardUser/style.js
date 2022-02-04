import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
  margin-top: 125px;

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
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

export const EventsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    padding: 0 20px;
    /* justify-content: flex-start; */
  }
`;
