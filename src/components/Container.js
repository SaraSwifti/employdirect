import React, { Component } from "react";
import NavSearch from "./NavSearch";
import EmployList from "./EmployList";
import API from "../util/api";

//Class hugs around all components in the container and listens to the change in state to capture the change
class Container extends Component {
  state = {
    employees: [],
    searchEmployees: [],
    order: ""
  };

  componentDidMount() {
    API.getEmployees().then(res => this.setState({
      employees: res.data.results,
      searchEmployees: res.data.results
    })).catch(err => console.log(err))
  };

  employeeSearch = () => {
    API.getUsers()
      .then(res => this.setState({
        employees: res.data.results,
        searchEmployees: res.data.results
      }))
      .catch(err => console.log(err))
  };
  //is listening to the input field for the event of input
  handleInputChange = event => {
    const input = event.target.value;
    const employees = this.state.employees;
    const searchEmployees = employees.filter(employee => employee.name.first.indexOf(input.toLowerCase()) > -1)
    this.setState({
      searchEmployees,
    });
  };
//I need to make a button for this ? added sorted employees to name line.doesnt seem to be working.
  handleSortByName = () => {
    const searchEmployees = this.state.searchEmployees;
    if (this.state.order === "asc") {
      const sortEmployees = searchEmployees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
      this.setState({
        searchEmployees: sortEmployees,
        order: "desc"
      })
    } else {
      const sortEmployees = searchEmployees.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
      this.setState({
        searchEmployees: sortEmployees,
        order: "asc"
      });
    }
  }

  render() {
    return (
      <div>
        <NavSearch
          employee={this.state.employees}
          handleInputChange={this.handleInputChange} />
        <EmployList
          results={this.state.searchEmployees}
          handleSortByName={this.handleSortByName}
        />
      </div>
    )
  }
}

export default Container;