import React, { useState } from "react";
import { Card, Badge, Dropdown, Button, Spinner } from "react-bootstrap";
import DeleteEmployee from "../containers/DeleteEmployee";
import EditEmployeeDetail from "../containers/EditEmployeeDetail";
import AppModel from "../shared/AppModel";

const EmployeesList = ({ employees, loading, loadAllEmployees }: any) => {
  const [employeeId, setEmployeeId] = useState("sdfa");
  const [showAppModal, setShowAppModal] = useState(false);
  const [showDeleteAppModal, setShowDeleteAppModal] = useState(false);
  return (
    <>
      {!loading ? (
        <div className="row mx-2 mt-5">
          {employees.map((e: any) => {
            return (
              <div className=" col-lg-3 mt-5" key={e?._id}>
                <Card className="shadow p-3 border-0 mb-5 rounded mx-3">
                  <div className="mt-3 d-flex kd-overlay justify-content-center">
                    {/* <div className="ms-2">
                <Badge pill bg="success" style={{ cursor: "pointer" }} className="text-capitalize text-white  pill ">
                  Edit
                </Badge>
              </div> */}
                    <div className="ms-auto">
                      <Badge
                        pill
                        bg="danger"
                        onClick={() => {
                          setShowDeleteAppModal(true);
                          setEmployeeId(e?._id);
                        }}
                        style={{ cursor: "pointer" }}
                        className="text-capitalize text-white pill "
                      >
                        Delete
                      </Badge>
                    </div>
                  </div>

                  <Card.Body className="text-center">
                    <Card.Title className="mb-2">
                      <div className="text-center mb-3">
                        <Card.Img
                          variant="top"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          className="rounded-circle w-25"
                        />
                      </div>
                      <span className="mt-3">
                        {e?.first_name} {e?.last_name}
                      </span>
                    </Card.Title>
                    <span className="mt-3">
                      {e?.designation === "front_end"
                        ? "Front End Developer"
                        : e?.designation === "backend"
                        ? "Backend Developer"
                        : "Full Stack Developer"}
                    </span>
                    <Card.Text className="h6 mb-3" style={{ color: "#2bdfa7" }}>
                      {e?.email}
                    </Card.Text>
                    <Dropdown.Divider />
                    <Button
                      variant="success"
                      onClick={() => {
                        setShowAppModal(true);
                        setEmployeeId(e?._id);
                      }}
                    >
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          <AppModel
            show={showAppModal}
            handleClose={() => {
              setShowAppModal(false);
            }}
            title="View and Edit Employee Detail"
          >
            <EditEmployeeDetail
              setShowAppModal={setShowAppModal}
              employeeId={employeeId}
              loadAllEmployees={loadAllEmployees}
            />
          </AppModel>
          <AppModel
            show={showDeleteAppModal}
            handleClose={() => {
              setShowDeleteAppModal(false);
            }}
            title="Confirmation"
          >
            <DeleteEmployee
              setShowDeleteAppModal={setShowDeleteAppModal}
              employeeId={employeeId}
              loadAllEmployees={loadAllEmployees}
            />
          </AppModel>
        </div>
      ) : (
        <div className="d-flex justify-content-center vh-100" style={{ marginTop: "20%" }}>
          <Spinner animation="border" className="p-5 text-success" role="status"></Spinner>
        </div>
      )}
    </>
  );
};

export default EmployeesList;
