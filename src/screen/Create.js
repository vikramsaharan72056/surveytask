import React, { useState } from "react";

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
  const { selectedOption, setSelectedOption } = useState("");
  const { startDate, setStartDate } = useState("");
  const { endDate, setEndDate } = useState("");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handlestartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };
  return (
    <div>
      <div className="section">
        <div className="form col-6">
          <section>
            <Navbar className="Navbar ">
              <Container class="col-12">
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
            <div style={{ display: "flex" }}>
              <div className="col-5">
                <div>
                  <label for="inputName" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-12">
                  <label for="textarea" class="form-label">
                    Description
                  </label>
                  <input
                    type="textarea"
                    class="form-control"
                    id="inputPassword4"
                    style={{ height: "100px" }}
                  />
                </div>
                <div class="col-md-12">
                  <label for="dropdown" class="form-label">
                    Type of Survey
                  </label>
                  <br />
                  <select
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className="col-8"
                  >
                    <option value="">--select--</option>
                    <option value="survey 1">survey1</option>
                    <option value="survey 2">survey2</option>
                    <option value="survey 3">survey3</option>
                    <option value="survey 4">survey4</option>
                  </select>
                </div>
              </div>

              <div className="col-6 offset-1">
                <div style={{ display: "flex" }}>
                  <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={handlestartDate}
                      class="form-control"
                    />
                  </div>
                  <div className="offset-1">
                    <label htmlFor="endDate">End Date</label>
                    <input
                      type="date"
                      id="startDate"
                      value={endDate}
                      onChange={handleEndDate}
                      class="form-control"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="otherCriteria">other Criteria</label>
                  <br />
                  <input
                    type="textarea"
                    style={{ height: "100px" }}
                    class="form-control"
                  />
                </div>
                <div>
                  <label htmlFor="image">Upload Image</label>
                  <br />
                  <input type="file" class="form-control" />
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
