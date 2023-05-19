import React, { useState } from "react";
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
  const [model, setModel] = useState(false);
  return (
    <div>
      <div>
        <div className="section">
          <div className="form col-5">
            <section>
              <Navbar className="Navbar ">
                <a href="/survey/create">
                  {" "}
                  <i class="gg-arrow-left"></i>{" "}
                </a>
                <Container>
                  <Navbar.Brand className="logo">Create Questions</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      <button onClick={() => setModel(true)}>
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
                            top: "120px",
                            left: "300px",
                            right: "120px",
                            bottom: "120px",
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
                                // value={selectedOption}
                                // onChange={handleOptionChange}
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
                                  <select style={{ width: "18vw" }}>
                                    <option value="">select</option>
                                    <option value="Theme1">Theme1</option>
                                    <option value="Theme2">Theme2</option>
                                    <option value="Theme3">Theme3</option>
                                    <option value="Theme4">Theme4</option>
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
                                  <select style={{ width: "18vw" }}>
                                    <option value="">select</option>
                                    <option value="Theme1">Theme1</option>
                                    <option value="Theme2">Theme2</option>
                                    <option value="Theme3">Theme3</option>
                                    <option value="Theme4">Theme4</option>
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
                                      style={{
                                        width: "18vw",
                                      }}
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
                                    <select style={{ width: "18vw" }}>
                                      <option value="">select</option>
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
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
                                    <select style={{ width: "18vw" }}>
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
                                  <select style={{ width: "20vw" }}>
                                    <option value="">select</option>
                                    <option value="roboto">box</option>
                                    <option value="bold">circle</option>
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
                                  <input type="text" />
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
                              <button className="cancel">Cancel</button>
                              <button className="save">Save</button>
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
