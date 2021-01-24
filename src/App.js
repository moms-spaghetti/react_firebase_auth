import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../src/firebase/Auth";
import { DataContext } from "./contexts/dataContext";
import { AdminUsersContext } from "./contexts/adminUsersContext";

import Home from "./components/Home";
import HomeAdmin from "./components/Homeadmin";
import Login from "./components/Login";
import Card from "./components/Card";
import VideoViewer from "./components/VideoViewer";
import PrivateRoute from "./components/PrivateRoute";
import Cms from "./components/cms";
import Restricted from "./components/restricted";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const adminUsers = useContext(AdminUsersContext);
  const mockData = useContext(DataContext);

  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          render={() => (
            <>
              {adminUsers[0].find(
                (user) => user.email === currentUser.email
              ) ? (
                <HomeAdmin />
              ) : (
                <Home />
              )}
              {mockData.map((card) => {
                return <Card key={uuidv4()} data={card} />;
              })}
            </>
          )}
        />

        <Route exact path="/login" component={Login} />
        <PrivateRoute
          exact
          path={"/videoviewer/:id"}
          render={() => <VideoViewer />}
        />
        <PrivateRoute
          exact
          path={"/cms"}
          render={() =>
            adminUsers[0].find((user) => user.email === currentUser.email) ? (
              <Cms />
            ) : (
              <Restricted />
            )
          }
        />
      </Switch>
    </div>
  );
};

export default App;
