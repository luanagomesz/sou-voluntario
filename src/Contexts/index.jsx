import { AuthProvider } from "./Auth";
import { UserEventsProvider } from "./UserEvents";
import { RegisterEventsProvider } from "./RegisterEvents";
import { EventsPageProvider } from "./EventPage";
import { RedirectProvider } from "./Redirect";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <EventsPageProvider>
        <RegisterEventsProvider>
          <RedirectProvider>
            <UserEventsProvider>{children}</UserEventsProvider>;
          </RedirectProvider>
        </RegisterEventsProvider>
      </EventsPageProvider>
    </AuthProvider>
  );
};
