import React from "react";
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignUp() {
  const styles = {
    backgroundImage: 'url("/websiteBackground.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
  };
  return (
    <div style={styles}>
      <div style={{ marginTop: "20%" }}>
        <h2>Welcome to the new era of surveys</h2>
        <h6>Sign in to continue access pages</h6>
        <div style={{ marginTop: "15%" }}>
          <p>Don't have an Account?</p>
          <div className=" d-grid">
            <Button
              variant="primary"
              type="submit"
              style={{ "margin-left": "25%", width: "50%" }}
            >
              <Link to="/"> Login </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="col-4" style={{ margin: "20% 2%" }}>
        <Container>
          <Card className="shadow">
            <Card.Body>
              <div>
                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                <p className=" mb-5">Please enter your details to join us!</p>
                <Form>
                  <Form.Group controlId="formFullName">
                    <Form.Label className="text-center">
                      Your full name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formUsername"
                    >
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="email"
                          placeholder="Enter username"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="confirmPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>
                  <div className=" d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ "margin-left": "25%", width: "50%" }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
