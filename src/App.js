import React from "react";
import EmployeeCard from "./components/FriendCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
// import Search from "./components/Search";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <Wrapper>
      <Title>Employee List</Title>
      <SearchForm />
      <EmployeeCard />
    </Wrapper>
  );
}

export default App;
