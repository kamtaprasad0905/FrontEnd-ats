import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import user from "../api";
import EmployeesList from "../components/EmployeesList";
import Header from "../shared/Header";

const Employees = () => {
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadAllEmployees = async () => {
    setLoading(true);
    const res = await user.getAllEmployees();
    setLoading(false);
    setEmployees(res);
  };
  useEffect(() => {
    loadAllEmployees();
  }, []);
  return (
    <>
      <Header />
      {!loading ? (
        employees &&
        loadAllEmployees && (
          <EmployeesList employees={employees} loading={loading} loadAllEmployees={loadAllEmployees} />
        )
      ) : (
        <div className="d-flex justify-content-center vh-100" style={{ marginTop: "20%" }}>
          <Spinner animation="border" className="p-5 text-success" role="status"></Spinner>
        </div>
      )}
    </>
  );
};

export default Employees;
