import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const {
    accessToken,
    user: { userType },
  } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!accessToken ? (
          <Component />
        ) : isPrivate ? (
          <Redirect to="/" />
        ) : userType === "voluntary" ? (
          <Redirect to="/DashboardUser" />
        ) : (
          <Redirect to="/DashboardOng" />
        );
      }}
    />
  );
};

export default Route;
