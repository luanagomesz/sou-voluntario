import { AuthProvider } from "./Auth";
import { UserEventsProvider } from "./UserEvents";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserEventsProvider>{children}</UserEventsProvider>;
    </AuthProvider>
  );
};
