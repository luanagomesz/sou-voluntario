import styled from "styled-components";

export const EventsTypeSelection = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 6px;

  background-color: var(--grey-0);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 400px) {
    width: 300px;
  }
`;

export const ButtonOpenEvents = styled.button`
  width: 115px;
  height: 40px;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 13px;
  flex-shrink: 0;

  background-color: ${(props) =>
    props.eventType === "open" ? "var(--red)" : "transparent"};
  color: ${(props) =>
    props.eventType === "open" ? "#FFF" : "var(--grey-100)"};
`;

export const ButtonClosedEvents = styled.button`
  width: 115px;
  height: 40px;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 13px;
  flex-shrink: 0;

  background-color: ${(props) =>
    props.eventType === "closed" ? "var(--red)" : "transparent"};
  color: ${(props) =>
    props.eventType === "closed" ? "#FFF" : "var(--grey-100)"};
`;
