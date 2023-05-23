import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="Navbar">
        <Container>
          <Navbar.Brand href="/">10xSurvey</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Setting</NavDropdown.Item>
                <NavDropdown.Item href="/">Logout</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
