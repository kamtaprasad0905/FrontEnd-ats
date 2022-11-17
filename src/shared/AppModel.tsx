import React from "react";
import { Modal } from "react-bootstrap";
const AppModel = ({ show, handleClose, title, children }: any) => {
  return (
    <Modal className="resposive" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default AppModel;
