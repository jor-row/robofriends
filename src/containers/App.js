import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
    console.log(event.target.value);
  };

  const filteredList = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <header>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </header>
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredList} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchField: "",
//     };
//   }

//   async componentDidMount() {
// fetch returns a promise, hence the chained .then
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => this.setState({ robots: users }));
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     this.setState({ robots: users });
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchField: event.target.value });
//     console.log(event.target.value);
//   };

//   render() {
//     const { robots, searchField } = this.state;
//     const filteredList = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchField.toLowerCase());
//     });

//     return !robots.length ? (
//       <h1>Loading...</h1>
//     ) : (
//       <div>
//         <header>
//           <h1>RoboFriends</h1>
//           <SearchBox searchChange={this.onSearchChange} />
//         </header>
//         <Scroll>
//           <ErrorBoundary>
//             <CardList robots={filteredList} />
//           </ErrorBoundary>
//         </Scroll>
//       </div>
//     );
//   }
// }
