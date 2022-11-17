import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import user from "../api";
import EditEmployeeDetailForm from "../components/EditEmployeeDetailForm";
import { EmployeeDetailParams } from "../interfaces/EmployeeDetailParams";

const EditEmployeeDetail = ({ employeeId, setShowAppModal, loadAllEmployees }: any) => {
  const [employeeDetail, setEmployeeDetail] = useState(null);
  const [loading, setloading] = useState<boolean>(false);
  const loadEmployee = async () => {
    setloading(true);
    const res = await user.getEmployeeById(employeeId);
    setEmployeeDetail(res);
    setloading(false);
  };
  useEffect(() => {
    loadEmployee();
  }, [employeeId]);

  const editEmployee = async (params: EmployeeDetailParams) => {
    setloading(true);
    const res = await user.updateEmployeeById(employeeId, params);
    setloading(false);
    if (res.status === 201) {
      loadAllEmployees();
      setShowAppModal(false);
    } else {
      return;
    }
  };
  return (
    <>
      {!loading ? (
        employeeDetail && (
          <EditEmployeeDetailForm
            employeeDetail={employeeDetail}
            loading={loading}
            editEmployeeCallBack={editEmployee}
          />
        )
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" className="p-5 text-success" role="status"></Spinner>
        </div>
      )}
    </>
  );
};

export default EditEmployeeDetail;
