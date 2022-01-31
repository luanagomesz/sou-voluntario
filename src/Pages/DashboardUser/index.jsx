import {
  FakeHeader,
  Main,
  EventsTypeContainer,
  EventsSearchContainer,
} from "./style";
import { EventTypeSelector } from "../../Components/EventTypeSelector";
import { EventUserCard } from "../../Components/EventUserCard";
import { EventsSearch } from "../../Components/EventsSearch";

export const DashboardUser = () => {
  return (
    <>
      <FakeHeader />
      <Main>
        <EventsTypeContainer className="events__type__container">
          <EventTypeSelector />
        </EventsTypeContainer>
        <EventsSearchContainer>
          <EventsSearch />
        </EventsSearchContainer>
        <section className="events__list__container">
          <ul className="events__list">
            <EventUserCard />
          </ul>
        </section>
      </Main>
    </>
  );
};
