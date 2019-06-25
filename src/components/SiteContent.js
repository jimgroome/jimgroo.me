import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const SiteContent = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className='site-content-container'>
            <div className='site-content'>
              <h1 className='mb-4'>Jim Groome</h1>
              <p className='mb-0'>
                Web developer in Kent. Music fan, reader, excessively tall, hot
                drinks enthusiast.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SiteContent;
