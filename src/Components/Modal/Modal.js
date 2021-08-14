import React, { useEffect } from "react";
import { ModalContainer } from "./ModalStyled";

const Modal = ({ handleCloseModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEsc = (e) => e.code === "Escape" && handleCloseModal();

  const handleClick = (e) => e.target === e.currentTarget && handleCloseModal();

  return (
    <ModalContainer onClick={handleClick}>
      <div className="modal">{children}</div>
    </ModalContainer>
  );
};

export default Modal;
