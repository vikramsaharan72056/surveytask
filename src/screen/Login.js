import React from "react";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  const styles = {
    backgroundImage: 'url("/websiteBackground.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
  };
  return (
    <div style={styles} className="col-12">
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
              <Link to="/signup"> SignUp </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="col-4" style={{ margin: "20% 2%" }}>
        <Container>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase">Sign In</h2>
                <p className=" mb-5">Please enter your login and password!</p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className=" d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ "margin-left": "25%", width: "50%" }}
                    >
                      Login
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
