import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Next.css";
import Modal from "react-modal";

const Next = () => {
  const [formdata, setFormData] = useState({});
  const [model, setModel] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);

    await fetch("http://localhost:8888/savetheme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Theme saved");
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert("not saved");
      });
  };

  return (
    <div>
      <div style={{ display: "flex" }} className="col-12">
        <div style={{ height: "100vh" }}>
          <Sidebar />
        </div>
        <div className="section">
          <div className="form col-9">
            <section>
              <Navbar className="Navbar ">
                <a href="/survey/create">
                  {" "}
                  <i className="gg-arrow-left"></i>{" "}
                </a>
                <Container>
                  <Navbar.Brand className="logo">Create Questions</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      <button
                        type="button"
                        style={{ backgroundColor: "mediumseagreen" }}
                        onClick={() => setModel(true)}
                      >
                        Theme Setting
                      </button>
                      <Modal
                        isOpen={model}
                        style={{
                          overlay: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.75)",
                          },
                          content: {
                            position: "absolute",
                            top: "10%",
                            left: "30%",
                            right: "1%",
                            bottom: "5%",
                            border: "1px solid #ccc",
                            background: "#fff",
                            overflow: "auto",
                            WebkitOverflowScrolling: "touch",
                            borderRadius: "4px",
                            outline: "none",
                            padding: "20px",
                          },
                        }}
                      >
                        <div>
                          <form>
                            <div>
                              <label htmlFor="theme">Theme</label>
                              <br />
                              <select
                                id="theme"
                                style={{ width: "70%" }}
                                name="selectedOption"
                                onChange={handleChange}
                              >
                                <option value="">select</option>
                                <option value="Theme1">Theme1</option>
                                <option value="Theme2">Theme2</option>
                                <option value="Theme3">Theme3</option>
                                <option value="Theme4">Theme4</option>
                              </select>
                            </div>
                            <hr />
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  flexwrap: "wrap",

                                  justifyContent: "flex-start",
                                }}
                              >
                                <div
                                  style={{
                                    marginTop: "5%",
                                    marginBottom: "5%",
                                  }}
                                >
                                  <label htmlFor="text">Theme Name </label>
                                  <br />
                                  <input
                                    type="text"
                                    style={{ width: "18vw" }}
                                    name="themeName"
                                    onChange={handleChange}
                                  />
                                </div>
                                <div
                                  className="col-3 offset-1"
                                  style={{
                                    marginTop: "5%",
                                    marginBottom: "5%",
                                  }}
                                >
                                  <label htmlFor="text">Theme Type </label>
                                  <br />
                                  <select
                                    style={{ width: "18vw" }}
                                    id="themetype"
                                    name="themeType"
                                    onChange={handleChange}
                                  >
                                    <option value="">select</option>
                                    <option value="Theme1">survey</option>
                                  </select>
                                </div>
                                <div
                                  className="col-3 offset-1"
                                  style={{
                                    marginTop: "5%",
                                    marginBottom: "5%",
                                  }}
                                >
                                  <label htmlFor="text">From Type </label>
                                  <br />
                                  <select
                                    style={{ width: "18vw" }}
                                    name="fromType"
                                    onChange={handleChange}
                                  >
                                    <option value="">select</option>
                                    <option value="Theme1">One to One</option>
                                  </select>
                                </div>
                              </div>
                              <div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexwrap: "wrap",

                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    className="col-3 "
                                    style={{
                                      marginTop: "5%",
                                      marginBottom: "5%",
                                    }}
                                  >
                                    <label htmlFor="text">
                                      All Question Mandatory{" "}
                                    </label>
                                    <br />
                                    <select
                                      style={{ width: "18vw" }}
                                      name="allQuestionMandatory"
                                      onChange={handleChange}
                                    >
                                      <option value="">select</option>
                                      <option value="yes">Yes</option>
                                      <option value="No">No</option>
                                    </select>
                                  </div>
                                  <div
                                    className="col-3 offset-1"
                                    style={{
                                      marginTop: "5%",
                                      marginBottom: "5%",
                                    }}
                                  >
                                    <label htmlFor="text">Enable skip </label>
                                    <br />
                                    <select
                                      style={{ width: "18vw" }}
                                      name="enableSkip"
                                      onChange={handleChange}
                                    >
                                      <option value="">select</option>
                                      <option value="yes">Yes</option>
                                      <option value="no">No</option>
                                    </select>
                                  </div>
                                  <div
                                    className="col-3 offset-1"
                                    style={{
                                      marginTop: "5%",
                                      marginBottom: "5%",
                                    }}
                                  >
                                    <label htmlFor="text">Option Type </label>
                                    <br />
                                    <select
                                      style={{ width: "18vw" }}
                                      name="optionType"
                                      onChange={handleChange}
                                    >
                                      <option value="">select</option>
                                      <option value="square">box</option>
                                      <option value="circle">circle</option>
                                    </select>
                                  </div>
                                </div>

                                <hr />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  justifyContent: "space-evenly",
                                }}
                              >
                                <div
                                  className="col-3 offset-1"
                                  style={{
                                    marginTop: "5%",
                                    marginBottom: "5%",
                                  }}
                                >
                                  <label htmlFor="text">Font </label>
                                  <br />
                                  <select
                                    style={{ width: "20vw" }}
                                    name="font"
                                    onChange={handleChange}
                                  >
                                    <option value="">select</option>
                                    <option value="roboto">Roboto</option>
                                    <option value="bold">Bold</option>
                                  </select>
                                </div>
                                <div
                                  className="col-3"
                                  style={{
                                    marginTop: "5%",
                                    marginBottom: "5%",
                                  }}
                                >
                                  <label htmlFor="text">Colour </label>
                                  <br />
                                  <input
                                    type="text"
                                    name="color"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                marginTop: "10%",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",
                              }}
                            >
                              <button
                                className="cancel"
                                style={{
                                  width: "15%",

                                  backgroundColor: "Red",
                                  fontFamily: "20px",
                                }}
                              >
                                Cancel
                              </button>
                              <button
                                className="save"
                                type="submit"
                                style={{
                                  width: "15%",
                                  backgroundColor: "Green",
                                }}
                                onClick={handleSubmit}
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </Modal>

                      <button className="cancel">Cancel</button>

                      <Link to={"save"}>
                        <button className="save">Save</button>
                      </Link>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </section>
            <br />
            <div className="box ">
              <h1>
                Q1. <span> Question ?</span>
              </h1>
              <input type="text" placeholder="Enter Question"></input>
              &nbsp; &nbsp; &nbsp; <i className="fa fa-gear"></i>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Value 1
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Value 2
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
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
