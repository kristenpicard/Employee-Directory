import React from "react";
import EmployeeCard from "./components/FriendCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Title>Employee List</Title>
      <EmployeeCard />
    </Wrapper>
  );
}

export default App;
