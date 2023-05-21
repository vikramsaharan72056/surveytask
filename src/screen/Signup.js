import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const formdata = {
    email: email,
    password: password,
    name: name,
    cpassword: cpassword,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);

    try {
      const res = await fetch("http://localhost:8888/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      if (res.status === 401) {
        alert("please fill all the detalis");
      } else if (res.status === 406) {
        alert("user already exist");
      } else if (res.status === 200) {
        alert("user created successfully");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const styles = {
    backgroundImage: 'url("/websiteBackground.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
  };

  return (
    <div style={styles}>
      <div style={{ marginTop: "10%" }} className="col-5">
        <h2>Welcome to the new era of surveys</h2>
        <h6>Sign in to continue access pages</h6>
        <div style={{ marginTop: "15%" }}>
          <p>Don't have an Account?</p>
          <div className=" d-grid">
            <Button
              variant="primary"
              type="submit"
              style={{ marginLeft: "25%", width: "50%" }}
            >
              <Link to="/"> Login </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="col-5 offset-1" style={{ margin: "10% 2%" }}>
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
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="confirmPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <div className=" d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ marginLeft: "25%", width: "50%" }}
                      onClick={handleSubmit}
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
