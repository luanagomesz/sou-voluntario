import {
  FakeHeader,
  Main,
  EventsTypeContainer,
  EventsList,
  EventsListContainer,
} from "./style";
import { EventTypeSelector } from "../../Components/EventTypeSelector";
import { EventUserCard } from "../../Components/EventUserCard";

export const DashboardUser = () => {
  const array = new Array(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
  );

  return (
    <>
      <FakeHeader />
      <Main>
        <EventsTypeContainer className="events__type__container">
          <EventTypeSelector />
        </EventsTypeContainer>
        <EventsListContainer className="events__list__container">
          <EventsList className="events__list">
            {array.map((_) => (
              <EventUserCard />
            ))}
          </EventsList>
        </EventsListContainer>
      </Main>
    </>
  );
};
