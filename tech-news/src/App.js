import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import NewItems from "./Components/NewItems";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

export class App extends Component {
  pageSize = 10
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
