import React from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

const Error404 = () => {
  return (
    <div className="text-center ">
      <Alert className="vh-100" variant="danger">
        <Alert.Heading style={{ marginTop: "15%" }}>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
        <Link to={routes.registerEmployee} className="d-flex text-decoration-none justify-content-center">
          <Button variant="outline-success">Back</Button>
        </Link>
      </Alert>
    </div>
  );
};

export default Error404;
