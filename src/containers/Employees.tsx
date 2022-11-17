import React, { useEffect, useState } from "react";
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

      {employees && loadAllEmployees && (
        <EmployeesList employees={employees} loading={loading} loadAllEmployees={loadAllEmployees} />
      )}
    </>
  );
};

export default Employees;
