import React from "react";
import { MainStyled } from "./MainStyled";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    <MainStyled>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </MainStyled>
  );
};

export default Main;
