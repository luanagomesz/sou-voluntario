import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const EventsPageContext = createContext({});

const EventsPageProvider = ({ children }) => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [stateModal, setStateModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [selectedCategories, setCategories] = useState([]);
  const [eventPage, setEventPage] = useState(false);

  return (
    <EventsPageContext.Provider
      value={{
        selectedStates,
        setSelectedStates,
        setStateModal,
        stateModal,
        setCategories,
        categoryModal,
        setCategoryModal,
      }}
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
