import React from "react";
import logos from "./logos.svg";
import "./App.css";
import { CardList } from "../components/card-list/card-list.component.jsx";
import { SearchBox } from "../components/search-box/search-box.component.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((results) => this.setState({ monsters: results }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const searchFilterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search your item here..."
          handleChange={this.handleChange}
        />
        <CardList monsters={searchFilterMonsters} />
      </div>
    );
  }
}

export default App;
