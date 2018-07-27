import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//custom components
import MyNavbar from "./components/Navbar";
import Main from "./components/Main";
import Create from "./components/pages/Create";
import Join from "./components/pages/Join";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const MyContext = React.createContext();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/create" component={Create}>
              <Route path="/create/:sessionId" component={Join} />
            </Route>
            <Route exact path="/join" component={Join} />
            <Main />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
