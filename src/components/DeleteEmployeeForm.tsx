import React from "react";
import { Button, Form } from "react-bootstrap";

const DeleteEmployeeForm = ({ deleteEmployee, setShowDeleteAppModal }: any) => {
  return (
    <>
      <div className="text-danger h5 mt-1">Are you sure want to delete this Employee?</div>
      <div onSubmit={deleteEmployee} className="d-flex mt-4 justify-content-end">
        <Button onClick={deleteEmployee} variant="danger">
          Delete
        </Button>
        <Button className="ms-3" onClick={() => setShowDeleteAppModal(false)} variant="outline-warning">
          Cancel
        </Button>
      </div>
    </>
  );
};

export default DeleteEmployeeForm;
