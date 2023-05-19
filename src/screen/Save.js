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
import "./Save.css";
import Next from "./Next";

const Save = () => {
  return (
    <div>
      <div className="section">
        <div className="form">
          <section>
            <Navbar className="Navbar">
              <a href="/survey/create/next">
                {" "}
                <i class="gg-arrow-left"></i>
              </a>
              <Container>
                <Navbar.Brand className="logo">
                  &nbsp; &nbsp; &nbsp; Create Survey
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
        </div>
      </div>
    </div>
  );
};

export default Save;
