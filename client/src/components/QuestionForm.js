import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col
} from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Form className="mt-3">
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="text"
            id="title"
            placeholder="Title of Game Session"
          />
        </FormGroup>
        <FormGroup>
          <Label for="question">Question</Label>
          <Input
            type="text"
            name="text"
            id="question"
            placeholder="Type Question here..."
          />
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xs="6" sm="6" md="4">
              <FormGroup>
                <Label for="option">Option One</Label>
                <Input
                  type="text"
                  name="option"
                  id="option-one"
                  placeholder="Option one..."
                />
              </FormGroup>
            </Col>
            <Col xs="6" sm="6" md="4">
              <FormGroup>
                <Label for="option">Option Two</Label>
                <Input
                  type="text"
                  name="option"
                  id="option-two"
                  placeholder="Option two..."
                />
              </FormGroup>
            </Col>
            <Col xs="6" sm="6" md="4">
              <FormGroup>
                <Label for="option">Option Three</Label>
                <Input
                  type="text"
                  name="option"
                  id="option-three"
                  placeholder="Option three..."
                />
              </FormGroup>
            </Col>
            <Col xs="6" sm="6" md="4">
              <FormGroup>
                <Label for="option">Option Four</Label>
                <Input
                  type="text"
                  name="option"
                  id="option-four"
                  placeholder="Option four..."
                />
              </FormGroup>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Label for="option">Correct Answer</Label>
          <Input type="select" name="select" id="answer">
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
          </Input>
        </FormGroup>
        <Row>
          <Col xs="6" sm="6">
            <Button type="submit" className="bg-primary">
              Next Question
            </Button>
          </Col>
          <Col xs="6" sm="6">
            <Button type="submit" className="bg-danger float-right">
              Finish
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
