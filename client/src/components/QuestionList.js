import React, { Component } from "react";
import { Collapse, Button, CardBody, Card, ListGroup, ListGroupItem} from "reactstrap";

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="mt-3">

        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem", width: "100%" }}
        >
          Question One
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <ListGroup>
                <ListGroupItem color="success">Cras justo odio</ListGroupItem>
                <ListGroupItem color="success">
                  Dapibus ac facilisis in
                </ListGroupItem>
                <ListGroupItem color="success">Morbi leo risus</ListGroupItem>
                <ListGroupItem color="danger">
                  Porta ac consectetur ac
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default QuestionList;
