import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Session = ({ match }) => (
  <div>
    <h3>{match.params.sessionId}</h3>
  </div>
);
