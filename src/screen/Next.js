import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Next.css";

const Next = () => {
  return (
    <div>
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
                    <a href="" class="previous round">
                      &#8249;
                    </a>
                    Create Questions
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      <button className="cancel">Cancel</button>
                      <span> </span>
                      <Link to={"save"}>
                        <button className="save">Save</button>
                      </Link>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </section>
            <br />
            <div>
              <h1>
                Q1. <span>Add a Question ?</span>
              </h1>
              <input type="text"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next;
