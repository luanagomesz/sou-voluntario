import { UserEventsProvider } from "./UserEvents";
import { RegisterEvents } from "./RegisterEvents";

export const Providers = ({ children }) => {
  return (
    <RegisterEvents>
      <UserEventsProvider>{children}</UserEventsProvider>;
    </RegisterEvents>
  );
};
