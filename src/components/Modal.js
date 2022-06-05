import React from "react";
import LoginPage from "../components/LoginPage";

const Modal = (props) => {
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  return (
    <div className="modal" style={divStyle}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="login-container">
          <LoginPage />
        </div>
      </div>
    </div>
  );
};

export default Modal;
