import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./constants/routes";
import RegisterEmployee from "./containers/RegisterEmployee";
import Error404 from "./Error/Error404";
import Employees from "./containers/Employees";
function App() {
  return (
    <Routes>
      <Route path={routes.registerEmployee} element={<RegisterEmployee />} />
      <Route path={routes.allEmployees} element={<Employees />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
