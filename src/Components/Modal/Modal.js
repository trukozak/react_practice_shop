import React, { Component } from "react";
import { ModalContainer } from "./ModalStyled";

class Modal extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  handleEsc = (e) => e.code === "Escape" && this.props.handleCloseModal();

  handleClick = (e) =>
    e.target === e.currentTarget && this.props.handleCloseModal();

  render() {
    return (
      <ModalContainer onClick={this.handleClick}>
        <div className="modal">{this.props.children}</div>
      </ModalContainer>
    );
  }
}

export default Modal;
