import {
  FakeHeader,
  Main,
  EventsStatusContainer,
  EventsList,
  EventsListContainer,
} from "./style";
import { EventStatusSelector } from "../../Components/EventStatusSelector";
import { EventUserCard } from "../../Components/EventUserCard";
import { useUserEvents } from "../../Contexts/UserEvents";
import { useCallback, useEffect, useState } from "react";

export const DashboardUser = () => {
  const { subscribedFilteredEvents, loadSubscribedFilteredEvents } =
    useUserEvents();
  const [eventIsCompleted, setEventIsCompleted] = useState(false);

  const handleSetEventStatus = useCallback((status) => {
    setEventIsCompleted(status);
  }, []);

  useEffect(() => {
    loadSubscribedFilteredEvents(
      3,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZ0BtYWlsLmNvbSIsImlhdCI6MTY0MzczOTUzMCwiZXhwIjoxNjQzNzQzMTMwLCJzdWIiOiIxIn0.t6bImOl8t_uqfuG7kB0tHM3FiNqPs5narJ7SkvR6ei4",
      eventIsCompleted
    );
  }, [eventIsCompleted]);

  console.log(subscribedFilteredEvents);

  return (
    <>
      <FakeHeader />
      <Main>
        <EventsStatusContainer className="events__status__container">
          <EventStatusSelector
            handleSetEventStatus={handleSetEventStatus}
            eventIsCompleted={eventIsCompleted}
          />
        </EventsStatusContainer>
        <EventsListContainer className="events__list__container">
          <EventsList className="events__list">
            {subscribedFilteredEvents.map((event) => (
              <EventUserCard key={event.id} event={event} />
            ))}
          </EventsList>
        </EventsListContainer>
      </Main>
    </>
  );
};
