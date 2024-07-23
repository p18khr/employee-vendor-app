// SendEmail.js
import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function Employees() {
  const [employees, setEmployees] = useState([]);


  const getEmployees = async () =>{
    const response = await fetch(`http://localhost:8081/employee`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setEmployees(json);
  }

  useEffect(() => {
    getEmployees();
  }, []);

  const sendEmail = async(name,email,upi) => {
    await fetch(`http://localhost:8081/email`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name,email,upi }),
      });
  };

  return (
    <div className="container">
      <div className="container my-5">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          Employees List
        </div>
        <Row xs={1} md={1}>
          {employees.map((employee) => (
            <Col key={employee.id}>
              <div className="card text-center my-5">
                <div
                  className="btn btn-primary"
                  style={{
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  Vendor Name: {employee.name}
                  <br />
                  
                </div>
                <div
                  className="card-body"
                  style={{ height: "120px", overflow: "hidden" }}
                >
                 <div>CTC : {employee.ctc}</div>
                 <div>Email: {employee.email}</div>
                 <div>Designation: {employee.designation}</div>
                </div>
                
                
              </div>
            </Col>
          ))}
          <div hidden={employees.length !== 0}>No Employees to show</div>
        </Row>
      </div>
    </div>
  );
};


