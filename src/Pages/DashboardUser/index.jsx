import { FakeHeader, Main, EventsTypeContainer } from "./style";
import { EventTypeSelector } from "../../Components/EventTypeSelector";
import { EventUserCard } from "../../Components/EventUserCard";

export const DashboardUser = () => {
  return (
    <>
      <FakeHeader />
      <Main>
        <EventsTypeContainer className="events__type__container">
          <EventTypeSelector />
        </EventsTypeContainer>
        <section className="events__list__container">
          <ul className="events__list">
            <EventUserCard />
          </ul>
        </section>
      </Main>
    </>
  );
};
