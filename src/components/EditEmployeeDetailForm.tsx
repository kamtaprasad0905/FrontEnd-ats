import React, { useState } from "react";
import { Form, Row, Button, Spinner } from "react-bootstrap";
const EditEmployeeDetailForm = ({ employeeDetail, loading, editEmployeeCallBack }: any) => {
  const [validated, setValidated] = useState<boolean>(false);
  const [firstName, setFirstName] = useState(employeeDetail.first_name);
  const [lastName, setLastName] = useState(employeeDetail.last_name);
  const [email, setEmail] = useState(employeeDetail.email);
  const [position, setPosition] = useState(employeeDetail.designation);
  const [state, setState] = useState(employeeDetail.state);
  const [city, setCity] = useState(employeeDetail.city);
  const [enableInputField, setEnableInputField] = useState<true | false>(false);
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
        await editEmployeeCallBack({
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
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <div className="col-sm-6">
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              disabled={!enableInputField}
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
              disabled={!enableInputField}
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
              disabled={!enableInputField}
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
              disabled={!enableInputField}
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
              disabled={!enableInputField}
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
              disabled={!enableInputField}
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>
        </div>
      </Row>
      {!enableInputField ? (
        <div onClick={() => setEnableInputField(true)} className="mb-2 btn btn-outline-dark">
          Edit
        </div>
      ) : (
        <div>
          <Button type="submit" disabled={loading} className="mb-2" variant="outline-success">
            {loading ? "Saving" : "Save"}
          </Button>
          {!loading ? (
            <div onClick={() => setEnableInputField(false)} className="mb-2 ms-3 btn btn-danger">
              Cancel
            </div>
          ) : null}
        </div>
      )}
    </Form>
  );
};

export default EditEmployeeDetailForm;
