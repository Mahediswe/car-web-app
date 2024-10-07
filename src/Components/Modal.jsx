import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="success">
            This is a success alert—check it out!
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary">Primary Button</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;