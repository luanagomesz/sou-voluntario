import { UserEventsProvider } from "./UserEvents";

export const Providers = ({ children }) => {
  return <UserEventsProvider>{children}</UserEventsProvider>;
};
