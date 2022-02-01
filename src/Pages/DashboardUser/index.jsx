import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../Components/Header";

export const DashboardUser = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    // ga.send(["pageview", location.pathname]);
    console.log(location.pathname);
  }, [location]);

  console.log(location);
  return (
    <div>
      <Header dashboardOng={true} />
      <h1>DashboardOng</h1>
    </div>
  );
};
