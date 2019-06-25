import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const SiteContent = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="site-content-container">
            <div className="site-content">
              <h1 className="mb-4">Jim Groome</h1>
              <p>
                Web developer in Kent. Music fan, reader, excessively tall, hot
                drinks enthusiast.
              </p>
              <p className="mb-0">
                <a
                  href="https://github.com/jimgroome"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>{' '}
                ::{' '}
                <a
                  href="mailto:hello@jimgroo.me"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Email
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SiteContent;
