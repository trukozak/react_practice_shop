import React from "react";
import { NavLink } from "react-router-dom";

const HeaderListItem = ({
  path,
  exact,
  name,
  language,
  isAuth,
  isPrivate,
  isRestricted,
}) => {
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li className="headerListItem" key={path}>
          <NavLink
            to={path}
            className="headerListLink"
            activeClassName="activeHeaderListLink"
            exact={exact}
          >
            {name[language]}
          </NavLink>
        </li>
      )}
      {isPrivate && !isRestricted && isAuth && (
        <li className="headerListItem" key={path}>
          <NavLink
            to={path}
            className="headerListLink"
            activeClassName="activeHeaderListLink"
            exact={exact}
          >
            {name[language]}
          </NavLink>
        </li>
      )}
      {!isPrivate && isRestricted && !isAuth && (
        <li className="headerListItem" key={path}>
          <NavLink
            to={path}
            className="headerListLink"
            activeClassName="activeHeaderListLink"
            exact={exact}
          >
            {name[language]}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default HeaderListItem;
