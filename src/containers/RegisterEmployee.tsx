import React, { useState } from "react";
import user from "../api";
import RegisterEmployeeForm from "../components/RegisterEmployeeForm";
import Header from "../shared/Header";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { EmployeeDetailParams } from "../interfaces/EmployeeDetailParams";

const RegisterEmployee = () => {
  const [loading, setloading] = useState<boolean>(false);
  const navigate = useNavigate();
  const addEmployee = async (params: EmployeeDetailParams) => {
    setloading(true);
    const res = await user.addEmployee(params);
    setloading(false);
    if (res.status === 201) {
      setTimeout(() => {
        navigate(routes.allEmployees);
      }, 1000);
    } else {
      return;
    }
  };
  return (
    <>
      <Header />
      <RegisterEmployeeForm addEmployeeCallBack={addEmployee} loading={loading} />
    </>
  );
};

export default RegisterEmployee;
