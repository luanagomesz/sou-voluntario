import { useState } from "react";
import {
  ButtonClosedEvents,
  ButtonOpenEvents,
  EventsTypeSelection,
} from "./styles";

export const EventTypeSelector = () => {
  const [eventType, setEventType] = useState("closed");

  const handleSetEventType = (type) => {
    setEventType(type);
  };
  return (
    <EventsTypeSelection className="events__type__selection">
      <ButtonOpenEvents
        eventType={eventType}
        onClick={() => handleSetEventType("open")}
        className="button__open__events"
      >
        Abertos
      </ButtonOpenEvents>
      <ButtonClosedEvents
        eventType={eventType}
        onClick={() => handleSetEventType("closed")}
        className="button__closed__events"
      >
        Concluídos
      </ButtonClosedEvents>
    </EventsTypeSelection>
  );
};
