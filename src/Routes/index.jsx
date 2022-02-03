import { Switch, useHistory } from "react-router";
import { DashboardUser } from "../Pages/DashboardUser";
import { DashboardOng } from "../Pages/DashboardOng";
import { Events } from "../Pages/EventsPage";
import { LandingPage } from "../Pages/LandingPage";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

import Route from "./routes";

function Routes() {
  // const history = useHistory();

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      {/* <LandingPage history={history} />
      </Route> */}
      <Route path="/Login" component={Login} />
      {/* <Login history={history} />
      </Route> */}
      <Route path="/Register" component={Register} />
      {/* <Register history={history} />
      </Route> */}
      <Route path="/DashboardUser" component={DashboardUser} isPrivate />
      {/* <DashboardUser history={history} />
      </Route> */}
      <Route path="/DashboardOng" component={DashboardOng} isPrivate />
      {/* <DashboardOng history={history} />
      </Route> */}
      <Route path="/Events" component={Events} isPrivate />
      {/* <Events history={history} />
      </Route> */}
    </Switch>
  );
}

export default Routes;
