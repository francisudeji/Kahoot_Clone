import React, { Component } from "react";

//custom components
import MyNavbar from "./components/Navbar";
import Main from "./components/Main";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const MyContext = React.createContext();

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <br />
        <br />
        <Main />
      </div>
    );
  }
}

export default App;
