import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/authActions";
import { mainRoutes } from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import HeaderListItem from "./HeaderListItem/HeaderListItem";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.idToken);

  const exit = () => {
    dispatch(logOut());
  };
  return (
    <HeaderListStyled colors={colors}>
      {mainRoutes.map((item) => (
        <HeaderListItem
          {...item}
          language={language}
          key={item.path}
          isAuth={isAuth}
        />
      ))}
      {isAuth && (
        <button type="button" onClick={exit}>
          LogOut
        </button>
      )}
    </HeaderListStyled>
  );
};

export default HeaderList;
