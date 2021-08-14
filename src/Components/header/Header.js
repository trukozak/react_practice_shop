import React, { useEffect, useState } from "react";
import colors from "../../styles/colors";
import HeaderList from "./headerList/HeaderList";
import sprite from "../../icons/sprite.svg";
import Modal from "../Modal/Modal";
import { HeaderStyled } from "./HeaderStyled";

const initialState = {
  width: window.innerWidth,
  breakPoint: 768,
  isModalOpen: false,
};
const Header = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  });
  const handleResizeWindow = () => {
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  };
  const setOpenModal = () => {
    setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));
  };
  return (
    <>
      <HeaderStyled colors={colors}>
        <h2 className="headerLogo">Logo</h2>
        {state.width > state.breakPoint ? (
          <nav>
            <HeaderList />
          </nav>
        ) : (
          <svg className="burgerMenu" onClick={setOpenModal}>
            <use href={sprite + "#icon-menu_40px"} />
          </svg>
        )}
      </HeaderStyled>
      {state.isModalOpen && (
        <Modal handleCloseModal={setOpenModal}>
          <HeaderList />
        </Modal>
      )}
    </>
  );
};

export default Header;
