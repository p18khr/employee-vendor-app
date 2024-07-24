// EmployeeManagement.js
import React, { useState, useEffect } from "react";
import Alerts from "./Alerts";
import { Button } from "react-bootstrap";

export default function EmployeeManagement() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [ctc, setCtc] = useState("");
  const [email, setEmail] = useState("");

  const [alert,setAlert] = useState(true);

  const addEmployee = async (event) => {
    if(name !== "" && designation !== "" && email !== "" && ctc !==""){
        await fetch(`http://localhost:4600/employee`, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, designation, email, ctc }),
          });
          setAlert(false);
          
    }
    event.preventDefault();
  };

  return (
    <div className="container">
        <Alerts message={"Employee successfully created!! Browse to employee list to view the recently added one"} hidden={alert}></Alerts>
      <div className="container my-5">
        <div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            Employee Management
          </div>
          <form className="mx-5 my-5 text-center">
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder="Designation"
                  value={designation}
                  required
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <input
                  type="number"
                  placeholder="CTC"
                  value={ctc}
                  required
                  onChange={(e) => setCtc(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="my-4" style={{ textAlign: "center" }}>
              <br />
              <br />

              <Button
                className="btn btn-primary"
                onClick={addEmployee}
              >
                Add Employee
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
