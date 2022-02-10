import "./App.css";
import React from "react";
import Customer from "./components/Customer";
import { Component } from "react/cjs/react.production.min";

function App() {
  // render() {
  const customers = [
    {
    'id': 1,
    'image': "https://placeimg.com/64/64/1",
    'name': "Peter Parker",
    'birthday': 20020810,
    'gender': "Male",
    'job': "nice neigborhood",
    'email': "spider@marvel.com",
  },
  {
    'id': 2,
    'image': "https://placeimg.com/64/64/2",
    'name': "Zendaya Coleman",
    'birthday': 19960901,
    'gender': "Female",
    'job': "Acter",
    'email': "girl@crush.com",
  },
  {
    'id': 3,
    'image': "https://placeimg.com/64/64/3",
    'name': "Timothee Chalamet",
    'birthday': 19951227,
    'gender': "Male",
    'job': "Influencer",
    'email': "dune@child.com",
  }
]
  // return <Customer customer={customers.map} />;
  class App extends Component {
    renden() {
      return (
        <div>
          {
            customers.map(c => {
              return (
                <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                email={c.email}
                />
                );
            })
          }
        </div>
      )
    }
  }
}

export default App;
