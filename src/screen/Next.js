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
                <a href="/survey/create">
                  {" "}
                  <i class="gg-arrow-left"></i>{" "}
                </a>
                <Container>
                  <Navbar.Brand className="logo">Create Questions</Navbar.Brand>
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
            <div className="box">
              <h1>
                Q1. <span> Question ?</span>
              </h1>
              <input type="text" placeholder="Enter Question"></input>
              &nbsp; &nbsp; &nbsp; <i class="fa fa-gear"></i>{" "}
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Value 1
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Value 2
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Value 3
                </label>
              </div>
              <button className="add">Add Questions </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next;
