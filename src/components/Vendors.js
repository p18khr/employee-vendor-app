// SendEmail.js
import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function Vendors() {
  const [vendors, setVendors] = useState([]);


  const getVendors = async () =>{
    const response = await fetch(`http://localhost:8081/vendor`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setVendors(json);
  }

  useEffect(() => {
    getVendors();
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
          Vendors List
        </div>
        <Row xs={1} md={1}>
          {vendors.map((vendor) => (
            <Col key={vendor.id}>
              <div className="card text-center my-5">
                <div
                  className="btn btn-primary"
                  style={{
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  Vendor Name: {vendor.name}
                  <br />
                  
                </div>
                <div
                  className="card-body"
                  style={{ height: "120px", overflow: "hidden" }}
                >
                 <div>Upi : {vendor.upi}</div>
                 <div>Email: {vendor.email}</div>
                </div>
                <div
                className='card-footer'
                >
                  <Button onClick={()=>{sendEmail(vendor.name,vendor.email,vendor.upi)}}>Send Email</Button>
                </div>
                
              </div>
            </Col>
          ))}
          <div hidden={vendors.length !== 0}>No Vendors to show</div>
        </Row>
      </div>
    </div>
  );
};


