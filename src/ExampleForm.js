//import useState here
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ExampleForm() {
  //create state with attribute fullname, email & password here..
  const [state, setState] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //print state value with console.log here
    console.log(state);
  };

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center vh-100">
        <Col md="6">
          <Form onSubmit={handleOnSubmit}>
            <div className="text-center h3">Register</div>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                value={state.fullname}
                name="fullname"
                size="sm"
                type="text"
                placeholder="Enter Full Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                value={state.email}
                name="email"
                size="sm"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                value={state.password}
                name="password"
                size="sm"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" size="sm">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ExampleForm;
