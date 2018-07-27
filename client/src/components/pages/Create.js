import React, { Component } from "react";
import PropTypes from "prop-types";
//custom components
import MyNavbar from "../Navbar";
import QuestionForm from "../QuestionForm";

import { Jumbotron, Button, Container } from "reactstrap";

class Create extends Component {
  constructor(props) {
    super(props);
    background: {
      backgroundColor: "#fff";
    }
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <Container>
          <QuestionForm />
        </Container>
      </div>
    );
  }
}

Create.propTypes = {};

export default Create;
