import { UserEventsProvider } from "./UserEvents";
import { RegisterEventsProvider } from "./RegisterEvents";

export const Providers = ({ children }) => {
  return (
    <RegisterEventsProvider>
      <UserEventsProvider>{children}</UserEventsProvider>
    </RegisterEventsProvider>
  );
};
