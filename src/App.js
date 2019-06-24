import React from "react";
import { Container, Row, Col } from "reactstrap";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("UA-9828579-19");
  ReactGA.pageview(window.location.pathname);

  const colours = ["blue", "green", "yellow", "pink"];

  const colour = colours[Math.floor(Math.random() * colours.length)];
  const containerClass = "page-container " + colour;

  return (
    <div className={containerClass}>
      <Container fluid={true}>
        <Row>
          <Col>
            <h1>Jim Groome</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Web developer in Kent. Music fan, reader, excessively tall, hot
              drinks enthusiast.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <a href='https://github.com/jimgroome' className='mr-3'>
                <i className='material-icons'>code</i> Github
              </a>
              <a href='mailto:hello@jimgroo.me'>
                <i className='material-icons'>alternate_email</i> Email
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
