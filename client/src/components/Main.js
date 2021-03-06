import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { Link } from 'react-router-dom';

const Main = props => {
  return (
    <div className="main">
      <Container>
        <Jumbotron
          className="text-center"
          style={{ color: "#444" }}
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
            <Link to="/create" light className="btn btn-warning">
              Create
            </Link>
            <Link to="/join" className="btn btn-warning ml-7">
              Join
            </Link>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Main;
