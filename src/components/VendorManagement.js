// VendorManagement.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Alerts from "./Alerts";

export default function VendorManagement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [upi, setUpi] = useState("");

  const [alert, setAlert] = useState(true);

  const addVendor = async (event) => {
    if (name !== "" && upi !== "" && email !== "") {
      await fetch(`http://localhost:4600/vendor`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, upi }),
      });
      setAlert(false);
    }
    event.preventDefault();
  };

  return (
    <div>
      <div className="container">
        <Alerts
          message={
            "Vendor successfully created!! Browse to Vendor list to view the recently added one"
          }
          hidden={alert}
        ></Alerts>
        <div className="container my-5">
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              Vendor Management
            </div>
            <form className="mx-3 my-5 text-center">
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
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="UPI"
                    value={upi}
                    required
                    onChange={(e) => setUpi(e.target.value)}
                  />
                </div>
              </div>

              <div className="my-4" style={{ textAlign: "center" }}>
                <br />
                <br />

                <Button className="btn btn-primary" onClick={addVendor}>
                  Add Vendor
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
