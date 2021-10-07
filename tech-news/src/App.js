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
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><News key="entertainment" pageSize={6} country="in" category="entertainment" /></Route>
            <Route exact path="/business"><News key="business" pageSize={6} country="in" category="business" /></Route>
            <Route exact path="/science"><News key="science" pageSize={6} country="in" category="science" /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={6} country="in" category="technology" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={6} country="in" category="sports" /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
