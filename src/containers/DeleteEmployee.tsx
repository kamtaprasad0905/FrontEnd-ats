import React, { useState } from "react";
import user from "../api";
import DeleteEmployeeForm from "../components/DeleteEmployeeForm";

const DeleteEmployee = ({ setShowDeleteAppModal, employeeId, loadAllEmployees }: any) => {
  console.log(employeeId);
  const [loading, setloading] = useState<boolean>(false);
  const deleteEmployee = async () => {
    setloading(true);
    await user.deleteEmployeeById(employeeId);
    loadAllEmployees();
    setShowDeleteAppModal(false);
    setloading(false);
  };
  return (
    <>
      <DeleteEmployeeForm deleteEmployee={deleteEmployee} setShowDeleteAppModal={setShowDeleteAppModal} />
    </>
  );
};

export default DeleteEmployee;
