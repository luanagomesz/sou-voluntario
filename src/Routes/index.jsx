import { Route, Switch, useHistory } from "react-router";
import { DashboardUser } from "../Pages/DashboardUser";
import { DashboardOng } from "../Pages/DashboardOng";
import { Events } from "../Pages/EventsPage";
import { LandingPage } from "../Pages/LandingPage";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

function Routes() {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage history={history} />
      </Route>
      <Route path="/Login">
        <Login history={history} />
      </Route>
      <Route path="/Register">
        <Register history={history} />
      </Route>
      <Route path="/DashboardUser">
        <DashboardUser history={history} />
      </Route>
      <Route path="/DashboardOng">
        <DashboardOng history={history} />
      </Route>
      <Route path="/Events">
        <Events history={history} />
      </Route>
    </Switch>
  );
}

export default Routes;
