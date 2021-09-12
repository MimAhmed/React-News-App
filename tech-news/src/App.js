import React, { Component } from "react";
// import NewItems from "./Components/NewItems";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={6} country="in" category="sports" />
      </div>
    );
  }
}

export default App;
