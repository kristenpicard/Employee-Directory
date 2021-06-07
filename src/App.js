import React from "react";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Worker from "./components/Work";
import test from "./utils/API";

function App() {
  return (
    <Wrapper>
      <Title>Employee List</Title>
      <Worker data={test}/>
    </Wrapper>
  );
}

export default App;
