import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
const RegisterEmployeeForm = ({ addEmployeeCallBack, loading }: any) => {
  const [validated, setValidated] = useState<boolean>(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("front_end");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      try {
        await addEmployeeCallBack({
          email,
          first_name: firstName,
          designation: position,
          state,
          city,
          last_name: lastName,
        });
      } catch (error) {
        console.log(error);
      }
    }

    setValidated(true);
  };
  const validForm = () => email && position && state && lastName && firstName && city;
  return (
    <div className="container shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "10%" }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="h2 mt-4">New Employee Details</div>
        <div className="mb-4">Please fill out your information below.</div>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-sm-6">
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                required
              />
              <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-sm-6">
            <Form.Group>
              <Form.Label> Designation</Form.Label>
              <Form.Select
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              >
                <option value="front_end">Front End Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="full_stack">FullStack Developer</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">Please provide a valid designation.</Form.Control.Feedback>
            </Form.Group>
          </div>
        </Row>
        <Row className="mb-4">
          <div className="col-sm-6">
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
                value={state}
                required
              />
              <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-sm-6">
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required
              />
              <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
            </Form.Group>
          </div>
        </Row>

        <Button type="submit" disabled={loading || !validForm()} className="mb-4" variant="success">
          {!loading ? "Submit Details" : "Submitting..."}
        </Button>
      </Form>
    </div>
  );
};

export default RegisterEmployeeForm;
