import React, { Component } from "react";
import API from "../utils/API";
import FriendCard from "../FriendCard";
import Title from "../Title";
import Wrapper from "../Wrapper";
import SearchForm from "../SearchForm"

class Search extends Component {
  state = {
    search: "",
    employees: [],
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.search()
      .then(res => this.setState({ employees: res.data.map((event, i) => ({
        firstName: event.name.first,
        lastName: event.name.last,
        picture: event.picture.large,
        email: event.email,
        phone: event.phone,
        city: event.location.city,
        key: i,
      })) }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRandomEmployees(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
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
          
      </div>
    );
  }
}

export default Search;
