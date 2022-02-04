import { AuthProvider } from "./Auth";
import { UserEventsProvider } from "./UserEvents";
import { RegisterEventsProvider } from "./RegisterEvents";
import { EventsPageProvider } from "./EventPage";
import { CategoryImgProvider } from "./CategoryImg";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <EventsPageProvider>
        <RegisterEventsProvider>
          <CategoryImgProvider>
            <UserEventsProvider>{children}</UserEventsProvider>
          </CategoryImgProvider>
        </RegisterEventsProvider>
      </EventsPageProvider>
    </AuthProvider>
  );
};
