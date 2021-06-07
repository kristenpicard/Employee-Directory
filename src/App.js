import React from "react";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Worker from "./components/Work";

function App() {
  return (
    <Wrapper>
      <Title>Employee List</Title>
      <Worker />
    </Wrapper>
  );
}

export default App;
