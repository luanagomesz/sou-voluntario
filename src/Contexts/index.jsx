import { AuthProvider } from "./Auth";
import { UserEventsProvider } from "./UserEvents";
import { RegisterEventsProvider } from "./RegisterEvents";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
    <RegisterEventsProvider>
      <UserEventsProvider>{children}</UserEventsProvider>
    </RegisterEventsProvider>
    </AuthProvider>
  );
};
