import React from "react";
import { Redirect, Route } from "react-router-dom";
const PublicRoutes = ({ path, exact, component, isAuth, isRestricted }) =>
  isAuth && isRestricted ? (
    <Redirect to="/admin" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );

export default PublicRoutes;
