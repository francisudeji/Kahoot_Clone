import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  Badge
} from "reactstrap";

class Play extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="player" style={{ marginTop: "15vh" }}>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Row className="mb-2">
                  <Col xs="6" sm="6" md="6">
                    <h4>Desales</h4>
                  </Col>
                  <Col xs="6" sm="6" md="6" className="text-right">
                    <Badge style={{ fontSize: "1.2rem" }} color="primary">970</Badge>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6" sm="6" md="6">
                    <Button color="primary">primary</Button>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <Button color="danger">primary</Button>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs="6" sm="6" md="6">
                    <Button color="warning">primary</Button>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <Button color="info">primary</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Play;
