import { useLocation } from "react-router-dom";
import { React, useEffect } from "react";
import { Header } from "../../Components/Header";

export const DashboardOng = () => {
  const location = useLocation();

  useEffect(() => {
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
