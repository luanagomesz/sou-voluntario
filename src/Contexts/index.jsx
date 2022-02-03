import { AuthProvider } from "./Auth";
import { UserEventsProvider } from "./UserEvents";
import { RegisterEventsProvider } from "./RegisterEvents";
import { EventsPageProvider } from "./EventPage";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <EventsPageProvider>
        <RegisterEventsProvider>
          <UserEventsProvider>{children}</UserEventsProvider>
        </RegisterEventsProvider>
      </EventsPageProvider>
    </AuthProvider>
  );
};
