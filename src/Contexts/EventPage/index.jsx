import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const EventsPageContext = createContext({});

const EventsPageProvider = ({ children }) => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [stateModal, setStateModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [selectedCategories, setCategories] = useState([]);
  useEffect(() => {
    if (categoryModal === true) {
      document.getElementById("category").style.backgroundColor =
        "var(--ligthorange)";
      document.getElementById("category").style.color = "white";
    } else {
      document.getElementById("category").style.backgroundColor = "white";
      document.getElementById("category").style.color = "var(--grey-50)";
    }
  }, [categoryModal]);

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
