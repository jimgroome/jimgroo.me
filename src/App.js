import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
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
              Web developer. Music fan, reader, excessively tall, hot drinks
              enthusiast.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav>
              <NavItem>
                <NavLink href='https://github.com/jimgroome' target='_blank'>
                  <i className='fab fa-github' /> Github
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='mailto:hello@jimgroo.me' target='_blank'>
                  <i className='fas fa-at' /> Email
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
