import React, { Component } from "react";

//custom components
import MyNavbar from "./components/Navbar";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        
      </div>
    );
  }
}

export default App;
