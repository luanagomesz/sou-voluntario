import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { api } from "../../Service";
const EventsPageContext = createContext({});

const EventsPageProvider = ({ children }) => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [stateModal, setStateModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [selectedCategories, setCategories] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filteredDonation, SetFilteredDonation] = useState(false);

  useEffect(() => {
    if (
      filteredDonation === true &&
      selectedCategories.length > 0 &&
      selectedStates.length > 0
    ) {
      api.get("/events").then((res) => {
        setFilteredEvents(
          res.data.filter(
            (item) =>
              item.workType === "donation" &&
              selectedCategories.includes(item.category) &&
              selectedStates.includes(item.state)
          )
        );
      });
    } else if (filteredDonation === true && selectedStates.length > 0) {
      api.get("/events").then((res) => {
        setFilteredEvents(
          res.data.filter(
            (item) =>
              item.workType === "donation" &&
              selectedStates.includes(item.state)
          )
        );
      });
    } else if (filteredDonation === true && selectedCategories.length > 0) {
      api.get("/events").then((res) => {
        setFilteredEvents(
          res.data.filter(
            (item) =>
              item.workType === "donation" &&
              selectedCategories.includes(item.category)
          )
        );
      });
    } else if (selectedCategories.length > 0 && selectedStates.length > 0) {
      api.get("/events").then((res) => {
        setFilteredEvents(
          res.data.filter(
            (item) =>
              selectedCategories.includes(item.category) &&
              selectedStates.includes(item.state)
          )
        );
      });
    } else if (selectedStates.length > 0) {
      api.get("/events").then((res) => {
        setFilteredEvents(
          res.data.filter((item) => selectedStates.includes(item.state))
        );
      });
    } else if (selectedCategories.length > 0) {
      api.get("/events").then((res) => {
        setFilteredEvents(
          res.data.filter((item) => selectedCategories.includes(item.category))
        );
      });
    } else if (filteredDonation === true) {
      api.get("/events").then((res) => {
        setFilteredEvents(
          res.data.filter((item) => item.workType === "donation")
        );
      });
    } else {
      setFilteredEvents([]);
    }
  }, [filteredDonation, selectedCategories, selectedStates]);
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
        filteredEvents,
        setFilteredEvents,
        filteredDonation,
        SetFilteredDonation,
        selectedCategories,
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
