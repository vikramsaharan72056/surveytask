import React from "react";
import Home from "./Home";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
// import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Create.css";
import Next from "./Next";

const Create = () => {
  return (
    <div>
      <Header />
      <div className="section">
        <div>
          <Sidebar />
        </div>
        <div className="form">
          <section>
            <Navbar className="Navbar">
              <Container>
                <Navbar.Brand href="#home" className="logo">
                  Create Survey
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <button className="cancel">Cancel</button>
                    <span> </span>
                    <Link to={"Next"}>
                      <button className="next">Next</button>
                    </Link>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </section>
          <br />
          <form class="row g-3">
            <div class="col-md-12">
              <div>
                <div>
                  <label for="inputName" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-12">
                  <label for="text" class="form-label">
                    Description
                  </label>
                  <input type="text" class="form-control" id="inputPassword4" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
