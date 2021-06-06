import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import API from "../../utils/API";

class Worker extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available employees and update state
  componentDidMount() {
    API.getRandomEmployees()
    .then((res) => {
      this.setState({
        employees: res.data.results.map((event) => ({
          firstName: event.name.first,
          lastName: event.name.last,
          picture: event.picture.large,
          email: event.email,
          phone: event.phone,
          city: event.location.city,
          state:event.location.state
        })),
      });
    })
    .catch((err) => console.log(err));}

  // searchEmployee = (filter) => {
  //   console.log("Search", filter);
  //   const filteredList = this.state.employees.filter((employee) => {
  //     // merge data together, then check to see if employee exists
  //     let values = Object.values(employee).join("").toLowerCase();
  //     return values.indexOf(filter.toLowerCase()) !== -1;
  //   });
  //   // Update the employee list with the filtered value
  //   this.setState({ employees: filteredList });
  // };

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
          employees={this.state.employees}
        />
        <SearchResults results={this.state.results} />
        {[...this.state.employees].map((item) => (
          <EmployeeCard
            picture={item.picture}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            phone={item.phone}
            city={item.city}
            state={item.state}
            key={item.key}
          />
        ))}
      </div>
    );
  }
}

export default Worker;
