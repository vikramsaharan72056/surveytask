import React, { useEffect, useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";

import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import { Link, useNavigate } from "react-router-dom";
import "./Create.css";
import Next from "./Next";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const formdata = {
    name,
    description,
    selectedOption,
    startDate,
    endDate,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const res = fetch("https://surveyform-xpol.onrender.com/createSurvey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    if (res.status === 200) {
      alert("survey created successfully");
      navigate("/survey/create/next");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "98vh" }}>
        <Sidebar />
      </div>
      <div className="section">
        <div className="form col-10">
          <section>
            <Navbar className="Navbar ">
              <Container class="col-12">
                <Navbar.Brand>
                  <b>Create Survey</b>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <a href="/survey">
                      <button className="cancel">Cancel</button>
                    </a>
                    <span> </span>
                    <button className="next" type="submit" onClick={onSubmit}>
                      Next
                    </button>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </section>
          <br />
          <form class="row g-3">
            <div
              style={{
                display: "flex",
              }}
            >
              <div className="col-5">
                <div>
                  <label for="inputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    style={{ width: "100%" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form">
                  <label
                    for="textarea"
                    class="form-label"
                    style={{ marginTop: "8%" }}
                  >
                    Description
                  </label>
                  <input
                    type="textarea"
                    class="form-control"
                    id="inputPassword4"
                    style={{ height: "100px" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label for="dropdown" style={{ marginTop: "8%" }}>
                    Type of Survey
                  </label>
                  <br />
                  <select
                    id="dropdown"
                    className="form-control"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
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
                      onChange={(e) => setStartDate(e.target.value)}
                      class="form-control"
                    />
                  </div>
                  <div className="offset-2">
                    <label htmlFor="endDate">End Date</label>
                    <input
                      type="date"
                      id="startDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      class="form-control"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="otherCriteria" style={{ marginTop: "8%" }}>
                    other Criteria
                  </label>
                  <br />
                  <input
                    type="textarea"
                    style={{ height: "100px" }}
                    class="form-control"
                  />
                </div>
                <div>
                  <label htmlFor="image" style={{ marginTop: "8%" }}>
                    Upload Image
                  </label>
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
