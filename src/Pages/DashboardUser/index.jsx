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
import { useAuth } from "../../Contexts/Auth";
import { Header } from "../../Components/HeaderX";

export const DashboardUser = () => {
  const { accessToken, user } = useAuth();
  const {
    subscribedFilteredEvents,
    loadSubscribedFilteredEvents,
    defineStatusEvents,
    statusEvent,
  } = useUserEvents();

  const handleSetEventStatus = useCallback((status) => {
    defineStatusEvents(status);
  }, []);

  useEffect(() => {
    loadSubscribedFilteredEvents(user.id, accessToken, statusEvent);
  }, [statusEvent]);

  return (
    <>
      <Header />
      <Main>
        <EventsStatusContainer className="events__status__container">
          <EventStatusSelector
            handleSetEventStatus={handleSetEventStatus}
            eventIsCompleted={statusEvent}
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
