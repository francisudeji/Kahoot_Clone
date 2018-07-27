import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const Main = props => {
  return (
    <div className="main">
      <Container>
        <Jumbotron
          className="text-center"
          style={{ backgroundColor: "transparent", color: "#fff" }}
        >
          <h1 className="display-5">Welcome to GingerHead!</h1>
          <p className="lead">
            This is a simple kahoot game look alike, so look alive and enjoy the
            game
          </p>
          <hr className="my-2" />
          <p className="lead">
            Answer questions quickly to earn points. Click{" "}
            <strong>Create</strong> to initiate a new game and invite friends or{" "}
            <strong>Join</strong> to play!.
            <hr className="my-2" />
            May be best <strong>GingerHead</strong> win.
          </p>
          <p className="lead">
            <a href="/create" light className="btn btn-warning">
              Create
            </a>
            <a href="/join" className="btn btn-warning ml-7">
              Join
            </a>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Main;
