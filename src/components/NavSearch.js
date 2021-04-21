import React from 'react';
// import { link } from "react-router-dom"
//style later!

 function Navbar(props) {
  return (
    <div className="container header-container mt-5 mb-5">
      <div className="row">
        <div className="col text-center mb-4">
          <h1 >Employee Directory</h1>
          <p id="intro">Search employees by first name or select Employee Name to sort directory.</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <div>
            <input
              value={props.value}
              name="search"
              type="text"
              list="employee"
              placeholder="Search Employees"
              onChange={props.handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;