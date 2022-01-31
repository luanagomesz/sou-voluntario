import { useCallback, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  ButtonClosedEvents,
  ButtonOpenEvents,
  EventsStatusSelection,
} from "./styles";

export const EventStatusSelector = ({
  handleSetEventStatus,
  eventIsCompleted,
}) => {
  return (
    <EventsStatusSelection className="events__status__selection">
      <ButtonOpenEvents
        eventStatus={eventIsCompleted}
        onClick={() => handleSetEventStatus(false)}
        className="button__open__events"
      >
        Abertos
      </ButtonOpenEvents>
      <ButtonClosedEvents
        eventStatus={eventIsCompleted}
        onClick={() => handleSetEventStatus(true)}
        className="button__closed__events"
      >
        Concluídos
      </ButtonClosedEvents>
    </EventsStatusSelection>
  );
};
