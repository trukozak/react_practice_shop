import React from "react";
import { MainStyled } from "./MainStyled";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";
import { useSelector } from "react-redux";

const Main = () => {
  const isAuth = useSelector((state) => state.auth.idToken);
  return (
    <MainStyled>
      <Switch>
        {mainRoutes.map((route) =>
          route.isPrivate ? (
            <PrivateRoutes {...route} key={route.path} isAuth={isAuth} />
          ) : (
            <PublicRoutes {...route} key={route.path} isAuth={isAuth} />
          )
        )}
      </Switch>
    </MainStyled>
  );
};

export default Main;
