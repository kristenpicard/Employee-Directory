import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Search:&nbsp;</label>
       
        <input
          onChange={(event) => props.startSort(event)}
          name="employee"
          type="text"
          className="form"
          placeholder="Enter First or Last Name"
        />
      </div>
    </form>
  );
}

export default SearchForm;
