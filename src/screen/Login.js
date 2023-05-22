import React, { useState } from "react";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formdata = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://surveyform-xpol.onrender.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      if (res.status === 402) {
        alert("please provide all the details");
      } else if (res.status === 422) {
        alert("invalid credentials");
      } else if (res.status === 201) {
        alert("login successfull");
        navigate("/survey");
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
    height: "100vh",
  };
  return (
    <div style={styles} className="col-12">
      <div style={{ marginTop: "10%" }} className="col-5 offset-1">
        <h2>Welcome to the new era of surveys</h2>
        <h6>Sign in to continue access pages</h6>
        <div style={{ marginTop: "10%" }}>
          <p>Don't have an Account?</p>
          <div className=" d-grid">
            <Button
              variant="primary"
              type="submit"
              style={{ marginLeft: "25%", width: "50%" }}
            >
              <Link to="/signup"> SignUp </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="col-4 offset-2" style={{ margin: "10% 2%" }}>
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
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className=" d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ marginLeft: "25%", width: "50%" }}
                      onClick={handleSubmit}
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
