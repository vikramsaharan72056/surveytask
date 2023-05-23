import React, { useState } from "react";
import ThemeModal from "../components/ThemeModal";

import Sidebar from "../components/sidebar/Sidebar";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import "./Next.css";

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

    try {
      const res = await fetch(
        "https://surveyform-xpol.onrender.com/savetheme",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );
      if (res.ok) {
        alert("Theme saved");
        closeModal();
      } else {
        alert("Theme not saved");
      }
    } catch (err) {
      console.log(err.message);
      alert("not saved");
    }
  };
  const closeModal = () => {
    setModel(false);
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
                <Link to="/survey/create">
                  {" "}
                  <i className="gg-arrow-left"></i>{" "}
                </Link>
                <Container>
                  <Navbar.Brand>Create Questions</Navbar.Brand>
                  <Navbar.Toggle />
                  <div className="justify-content-end">
                    <div
                      style={{
                        display: "flex",
                        justifyItems: "flex-end",
                      }}
                    >
                      <div>
                        <button
                          type="button"
                          style={{
                            backgroundColor: "mediumseagreen",
                          }}
                          onClick={() => setModel(true)}
                        >
                          Theme Setting
                        </button>
                      </div>
                      <div></div>
                      <ThemeModal
                        isOpen={model}
                        onClose={closeModal}
                        onSave={handleSubmit}
                        handleChange={handleChange}
                      />

                      <button className="cancel">Cancel</button>

                      <Link to={"save"}>
                        <button className="save">Save</button>
                      </Link>
                    </div>
                  </div>
                </Container>
              </Navbar>
            </section>
            <br />
            <div className="box ">
              <div style={{ display: "flex" }}>
                <div className="col-1 ">Q1.</div>
                <div className="col-4 ">
                  {" "}
                  <b> Question ?</b>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Question"
                      style={{ marginLeft: "5%" }}
                    ></input>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
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
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Value 3
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="add">Add Questions </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next;
