import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import routes from "../constants/routes";

const Header = () => {
  const path = useLocation();
  return (
    <Navbar style={{ zIndex: "999999" }} className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="ms-3">ATS Services</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link
            className={path.pathname === "/FrontEnd-ats/" ? "nav-link active ms-3" : "ms-3 nav-link"}
            to={routes.registerEmployee}
          >
            Add Employee
          </Link>
          <Link
            className={path.pathname === "/FrontEnd-ats/all_employees" ? "nav-link active ms-3" : "ms-3 nav-link"}
            to={routes.allEmployees}
          >
            Employees
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
