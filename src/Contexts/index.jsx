import { AuthProvider } from "./Auth";
import { UserEventsProvider } from "./UserEvents";
import { RegisterEventsProvider } from "./RegisterEvents";
import { EventsPageProvider } from "./EventPage";
import { BurgerProvider } from "./Burger/toggle";

export const Providers = ({ children }) => {
  return (
    <BurgerProvider>
      <AuthProvider>
        <EventsPageProvider>
          <RegisterEventsProvider>
            <UserEventsProvider>{children}</UserEventsProvider>;
          </RegisterEventsProvider>
        </EventsPageProvider>
      </AuthProvider>
    </BurgerProvider>
  );
};
