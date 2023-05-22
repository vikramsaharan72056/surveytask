import React from "react";
import Modal from "react-modal";

const ThemeModal = ({ isOpen, onClose, onSave, handleChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
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
                  <label htmlFor="text">All Question Mandatory </label>
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
                <input type="text" name="color" onChange={handleChange} />
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
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default ThemeModal;
