import React from 'react';
// import "./style.css";Styling later!

 function Employlist (props) {
  return (
        <table className="employeeTable">
          <thead>
            <tr>
              <th></th>
              <th onClick={props.handleSortByName}>Employee Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map(employee => (
              <tr className="table" key={employee.login.uuid}>
                <td className="image"> <img src={employee.picture.large} alt={employee.name.first + " " + employee.name.last + " "}/></td>
                <td className="align-middle" onChange={props.sortEmployees}>{employee.name.first + " " + employee.name.last}</td>
                <td className="align-middle">{employee.cell}</td>
                <td className="align-middle"><a href={`mailto:${employee.email}`}>{employee.email}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    }

export default Employlist;