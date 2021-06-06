import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

let test = {
  getRandomEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=15&nat=us");
  },
};

export default test

console.log(test);

