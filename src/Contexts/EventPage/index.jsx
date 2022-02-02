import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const EventsPageContext = createContext({});

const EventsPageProvider = ({ children }) => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [stateModal, setStateModal] = useState(false);

  useEffect(() => {
    console.log(selectedStates);
  }, [selectedStates]);

  useEffect(() => {
    if (stateModal === true) {
      document.getElementById("state").style.backgroundColor =
        "var(--ligthorange)";
      document.getElementById("state").style.color = "white";
    } else {
      document.getElementById("state").style.backgroundColor = "white";
      document.getElementById("state").style.color = "var(--grey-50)";
    }
  }, [stateModal]);
  return (
    <EventsPageContext.Provider
      value={{ selectedStates, setSelectedStates, setStateModal, stateModal }}
    >
      {children}
    </EventsPageContext.Provider>
  );
};

const useEventsPageContext = () => {
  const context = useContext(EventsPageContext);

  return context;
};

export { EventsPageProvider, useEventsPageContext };
