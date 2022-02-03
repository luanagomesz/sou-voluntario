import { AuthProvider } from "./Auth";
import { UserEventsProvider } from "./UserEvents";
import { RegisterEventsProvider } from "./RegisterEvents";
import { EventsPageProvider } from "./EventPage";
import { BurgerProvider } from "./Burger/toggle";

export const Providers = ({ children }) => {
  return (
<<<<<<< HEAD
    <AuthProvider>
      <EventsPageProvider>
        <RegisterEventsProvider>
          <UserEventsProvider>{children}</UserEventsProvider>
        </RegisterEventsProvider>
      </EventsPageProvider>
    </AuthProvider>
=======
    <BurgerProvider>
      <AuthProvider>
        <EventsPageProvider>
          <RegisterEventsProvider>
            <UserEventsProvider>{children}</UserEventsProvider>;
          </RegisterEventsProvider>
        </EventsPageProvider>
      </AuthProvider>
    </BurgerProvider>
>>>>>>> 4d1c6d7af000c66c5f7fe007b8cb1185c1f084b6
  );
};
