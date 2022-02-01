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
  const { subscribedEvents, loadSubscribedEvents } = useUserEvents();
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventIsCompleted, setEventIsCompleted] = useState(false);

  const handleSetEventStatus = useCallback((status) => {
    setEventIsCompleted(status);
  }, []);

  useEffect(() => {
    const events = subscribedEvents.filter(
      (event) => event.completed === eventIsCompleted
    );
    setFilteredEvents(events);
  }, [eventIsCompleted]);

  useEffect(() => {
    loadSubscribedEvents(
      5,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbC5jb20iLCJpYXQiOjE2NDM2NTc0NzEsImV4cCI6MTY0MzY2MTA3MSwic3ViIjoiNSJ9.Bx8OXnDy9MTuRr-syOKWu7WLyncw_GMg3IwpXfDriUs"
    );
  }, []);

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
            {filteredEvents.map((event) => (
              <EventUserCard key={event.id} event={event} />
            ))}
          </EventsList>
        </EventsListContainer>
      </Main>
    </>
  );
};
