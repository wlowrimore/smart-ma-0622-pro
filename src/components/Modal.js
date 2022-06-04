import React from "react";

const Modal = (props) => {
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;


