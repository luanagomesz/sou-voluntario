import { AuthProvider } from "./Auth";
import { UserEventsProvider } from "./UserEvents";
import { RegisterEventsProvider } from "./RegisterEvents";
import { BurgerProvider } from "./Burger/toggle";

export const Providers = ({ children }) => {
  return (
    <BurgerProvider>
      <AuthProvider>
        <RegisterEventsProvider>
          <UserEventsProvider>{children}</UserEventsProvider>;
        </RegisterEventsProvider>
      </AuthProvider>
    </BurgerProvider>
  );
};
