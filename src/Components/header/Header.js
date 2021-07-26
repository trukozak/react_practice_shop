import React, { Component } from "react";
import colors from "../../styles/colors";
import HeaderList from "./headerList/HeaderList";
import { HeaderStyled } from "./HeaderStyled";
import sprite from "../../icons/sprite.svg";
import Modal from "../Modal/Modal";

class Header extends Component {
  state = { width: window.innerWidth, breakPoint: 768, isModalOpen: false };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
  }
  handleResizeWindow = () => {
    this.setState({ width: window.innerWidth });
  };
  setOpenModal = () => {
    this.setState((prev) => ({
      isModalOpen: !prev.isModalOpen,
    }));
  };
  render() {
    const { width, breakPoint, isModalOpen } = this.state;
    return (
      <>
        <HeaderStyled colors={colors}>
          <h2 className="headerLogo">Logo</h2>
          {width > breakPoint ? (
            <nav>
              <HeaderList />
            </nav>
          ) : (
            <svg className="burgerMenu" onClick={this.setOpenModal}>
              <use href={sprite + "#icon-menu_40px"} />
            </svg>
          )}
        </HeaderStyled>
        {isModalOpen && (
          <Modal handleCloseModal={this.setOpenModal}>
            <HeaderList />
          </Modal>
        )}
      </>
    );
  }
}

export default Header;
