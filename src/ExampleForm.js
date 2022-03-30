import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class ExampleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      password: '',
    };
  }

  handleOnChange = (e) => {
    const state = this.state;
    this.setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    //print state value with console.log here
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <Row className="d-flex align-items-center justify-content-center vh-100">
          <Col md="6">
            <Form onSubmit={this.handleOnSubmit}>
              <div className="text-center h3">Register</div>
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.fullname}
                  name="fullname"
                  size="sm"
                  type="text"
                  placeholder="Enter Full Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.email}
                  name="email"
                  size="sm"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.password}
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
}

export default ExampleForm;
