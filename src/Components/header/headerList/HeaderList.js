import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled colors={colors}>
      {mainRoutes.map((item) => (
        <li className="headerListItem" key={item.path}>
          <NavLink
            to={item.path}
            className="headerListLink"
            activeClassName="activeHeaderListLink"
            exact={item.exact}
          >
            {item.name[language]}
          </NavLink>
        </li>
      ))}
    </HeaderListStyled>
  );
};

export default HeaderList;
