import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard";
import SearchForm from "../SearchForm";
import API from "../../utils/API";

class Worker extends Component {
  state = {
    search: "",
    employees: [],
    employeeSort: [],
    sorted: false,
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getRandomEmployees()
    .then((res) => {
      console.log(res);
      this.setState({
        employees: res.data.results.map((e, i) => ({
          firstName: e.name.first,
          lastName: e.name.last,
          picture: e.picture.large,
          email: e.email,
          phone: e.phone,
          city: e.location.city,
        })),
      });
    })
    .catch((err) => console.log(err));}

  searchEmployee = (filter) => {
    console.log("Search", filter);
    const filteredList = this.state.employees.filter((employee) => {
      // merge data together, then check to see if employee exists
      let values = Object.values(employee).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    // Update the employee list with the filtered value
    this.setState({ employees: filteredList });
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getRandomEmployees(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Search By Name</h1>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          value={this.state.search}
        />
        {[...this.state.employees].map((item) => (
          <EmployeeCard
            picture={item.picture}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            phone={item.phone}
            city={item.city}
            key={item.key}
          />
        ))}
      </div>
    );
  }
}

export default Worker;
