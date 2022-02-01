import { createContext, useCallback, useContext, useState } from "react";

import { api } from "../../Service";

const UserEventsContext = createContext({});

const UserEventsProvider = ({ children }) => {
  const [subscribedEvents, setSubscribedEvents] = useState([]);
  const [subscribedFilteredEvents, setSubscribedFilteredEvents] = useState([]);

  const loadSubscribedEvents = useCallback(async (userId, accessToken) => {
    const response = await api.get(`/events?voluntaries_like=[${userId}]`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    setSubscribedEvents([...response.data]);
  }, []);

  const loadSubscribedFilteredEvents = useCallback(
    async (userId, accessToken, status) => {
      const response = await api.get(
        `/events?voluntaries_like=[${userId}]&completed_like=${status}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      console.log(response.data);

      setSubscribedFilteredEvents([...response.data]);
    },
    [],
  );

  return (
    <UserEventsContext.Provider
      value={{
        subscribedEvents,
        loadSubscribedEvents,
        subscribedFilteredEvents,
        loadSubscribedFilteredEvents,
      }}
    >
      {children}
    </UserEventsContext.Provider>
  );
};

const useUserEvents = () => {
  const context = useContext(UserEventsContext);

  if (!context) {
    throw new Error("useUserEvents must be used within an UserEventsProvider");
  }

  return context;
};

export { UserEventsProvider, useUserEvents };
