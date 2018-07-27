import React, { Component } from "react";
import PropTypes from "prop-types";
//custom components
import MyNavbar from "../Navbar";
import QuestionForm from "../QuestionForm";
import QuestionList from "../QuestionList";

import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

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
          <Row>
            <Col xs="12" md="8">
              <QuestionForm />
            </Col>
            <Col xs="12" md="4">
              <h5 className="mt-3">Questions Appear Here</h5>
              <QuestionList />
              <QuestionList />
              <QuestionList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Create.propTypes = {};

export default Create;
