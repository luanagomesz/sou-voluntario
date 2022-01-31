import styled from "styled-components";

export const FakeHeader = styled.header`
  width: 100%;
  height: 130px;
  background-color: #fff;
  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 130px);

  padding-bottom: 50px;

  background-color: var(--ligthblue);
  > * {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const EventsTypeContainer = styled.section`
  width: 100%;
  height: 100px;
  padding: 30px 20px 15px;
`;

export const EventsSearchContainer = styled.section`
  width: 100%;
  height: 100px;
  padding: 30px 20px 15px;
`;

export const EventsListContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const EventsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
