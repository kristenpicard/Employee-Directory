import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeCard from "../EmployeeCard";
import SearchForm from "../SearchForm";

class Worker extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    sorted: false,
  };

  // When the component mounts, get a list of all available employees and set state
  componentDidMount() {
    API.getRandomEmployees().then((res) => {
      this.setState({
        employees: res.data.results,
      });
    });
  }

  // Sorts through employees based on what is typed in search bar
  sortEmployees = () => {
    let { employees, search} = this.state;
    let results = employees.filter((sorted) => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase())
      );
    });
    this.setState({ results });
  };

  // Dependent on what is typed, sends to SortEmployees to be filtered
  startSorting = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmployees();
      this.setState({ sorted: true });
    });
  };

  render = () => {
    return (
      <div>
        <div>
          <SearchForm startSort={this.startSorting} />
        </div>

        <div>
        <table className="table table-striped table-hover table-bordered table-condensed">
            <thead className="thead">
              <tr className="centered">
                <th>Headshot</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
          {/* If the state is not "sorted", then map and render random employees */}
          {!this.state.sorted
            ? this.state.employees.map((item) => (
                <EmployeeCard
                  picture={item.picture.large}
                  firstName={item.name.first}
                  lastName={item.name.last}
                  email={item.email}
                  phone={item.phone}
                  city={item.location.city}
                  state={item.location.state}
                  key={item.id.value}
                />
              ))
            // If the state is "sorted", then take the results of the sort and display the corresponding card
            : this.state.results.map((item) => (
                <EmployeeCard
                picture={item.picture.large}
                firstName={item.name.first}
                lastName={item.name.last}
                email={item.email}
                phone={item.phone}
                city={item.location.city}
                state={item.location.state}
                key={item.id.value}
                />
              ))}
               </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default Worker;
