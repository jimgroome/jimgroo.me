import React, { useState } from "react";
import ReactGA from "react-ga";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

const App = () => {
  const [moreOpen, setMoreOpen] = useState(false);

  ReactGA.initialize("UA-142839175-1");
  ReactGA.pageview(window.location.pathname);
  const colours = ["blue", "green", "yellow", "pink"];

  const colour = colours[Math.floor(Math.random() * colours.length)];
  const containerClass = "page-container " + colour;

  const onMoreClick = (e) => {
    e.preventDefault();
    setMoreOpen(!moreOpen);
  };

  return (
    <div className={containerClass}>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="7" lg="5">
            <div className="site-content">
              <h1 className="mb-4">Jim Groome</h1>
              <p>Full-stack developer based in Cranbrook, Kent.</p>
              <p>Loves HTML, CSS, JS, Python, AWS, JAMstack, and hot drinks.</p>
              <p className="mb-0">
                <a href="mailto:hello@jimgroo.me" rel="noopener noreferrer" target="_blank">
                  <span role="img" aria-label="Wave">
                    👋
                  </span>
                </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default App;
