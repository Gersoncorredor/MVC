import React from "react";

const Modal = ({ id, title, children, closeText, confirmText, onConfirm }) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              {closeText || "Cancelar"}
            </button>
            <button type="button" className="btn btn-primary" onClick={onConfirm} data-bs-dismiss="modal">
              {confirmText || "Aceptar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
