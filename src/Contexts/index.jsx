import { AuthProvider } from "./Auth";
import { UserEventsProvider } from "./UserEvents";
import { RegisterEventsProvider } from "./RegisterEvents";
import { EventsPageProvider } from "./EventPage";
import { CategoryImgProvider } from "./CategoryImg";
import { OngDataProvider } from "./OngData/index";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <EventsPageProvider>
        <OngDataProvider>
          <RegisterEventsProvider>
            <CategoryImgProvider>
              <UserEventsProvider>{children}</UserEventsProvider>
            </CategoryImgProvider>
          </RegisterEventsProvider>
        </OngDataProvider>
      </EventsPageProvider>
    </AuthProvider>
  );
};
