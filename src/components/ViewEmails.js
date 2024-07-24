// ViewEmails.js
import React, { useState, useEffect } from "react";

import { Row, Col} from "react-bootstrap";

export default function ViewEmails() {
  const [emails, setEmails] = useState([]);

  const getEmails = async () => {
    const response = await fetch(`http://localhost:4600/email`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setEmails(json);
  };

  useEffect(() => {
    getEmails();
  }, []);

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
          View sent Emails to vendors
        </div>
        <Row xs={1} md={1}>
          {emails.map((email) => (
            <Col key={email.id}>
              <div className="card text-center my-5">
                <div
                  className="btn btn-primary"
                  style={{
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  Vendor Name: {email.name}
                  <br />
                  
                </div>
                <div
                  className="card-body"
                >
                 <div>Upi : {email.upi}</div>
                 <div>Email: {email.email}</div>
                 <div>Email Content: {email.emailContent}</div>
                 <div>Date : {email.sentAt.slice(0,10)}</div>
                 <div>Time : {email.sentAt.slice(11,19)}</div>
                </div>
                
              </div>
            </Col>
          ))}
          <div hidden={emails.length !== 0}>No Emails to show</div>
        </Row>
      </div>
    </div>
  );
}
