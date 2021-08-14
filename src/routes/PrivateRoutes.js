import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoutes = ({ path, exact, component, isAuth}) =>
  !isAuth ? (
    <Redirect to='/login'/>
  ) : (
    <Route path={path} exact={exact} component={component} />
  );

export default PrivateRoutes;
