// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeManagement from './components/EmployeeManagement';
import VendorManagement from './components/VendorManagement';
import ViewEmails from './components/ViewEmails';
import Navbar from './components/Navbar';
import Vendors from './components/Vendors';
import Employees from './components/Employees';

function App() {
  return (
  
      <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
        <Route path="/add-employees" element={<EmployeeManagement/>} />
        <Route path="/add-vendors" element={<VendorManagement/>} />
        <Route path="/vendors" element={<Vendors/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/view-emails" element={<ViewEmails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
