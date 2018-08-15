import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
  Card,
  CardBody,
  Alert
} from "reactstrap";

class Join extends React.Component {
  state = {
    error: false
  }

  render() {
    return (
      <Container>
        <Row style={{marginTop: "25vh"}}>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardBody>
                <h4 className="text-center">Welcome!</h4>
                <Form>
                  <FormGroup>
                    <Label for="username" hidden>
                      Username
                    </Label>
                    <Input
                      type="text"
                      name="text"
                      id="username"
                      placeholder="Choose a username"
                    />
                  </FormGroup>{" "}
                  <FormGroup>
                    <Label for="code" hidden>
                      Code
                    </Label>
                    <Input
                      type="text"
                      name="code"
                      id="code"
                      placeholder="Enter Game Code"
                    />
                  </FormGroup>{" "}
                  <Button style={{width: "100%"}} className="bg-primary mb-3">Play!</Button>
                  {this.state.error
                    ?
                      <Alert color="danger"> Invalid Game Code (: </Alert>
                    :
                      ""
                  }

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>


    );
  }
}

export default Join;
