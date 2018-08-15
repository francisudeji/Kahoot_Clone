import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/pages/Create";
import Join from "./components/pages/Join";
import Play from "./components/pages/Play";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/create" component={Create} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/play" component={Play} />
      <App />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
