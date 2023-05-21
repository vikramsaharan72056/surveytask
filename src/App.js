import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Survey from "./screen/Survey";
import Create from "./screen/Create";
import Next from "./screen/Next";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Save from "./screen/Save";
import Header from "./components/header/Header";
import { createContext } from "react";

export const ThemeContext = createContext({
  selectedOption: "default",
  themeName: "Default theme",
  themeType: "light",
  fromType: "standard",
  allQuestionsMandatory: false,
  enableSkip: true,
  optionType: "radio",
  font: "Arial",
  color: "#000000",
});

function App() {
  const value = {
    selectedOption: "default",
    themeName: "Default theme",
    themeType: "light",
    fromType: "standard",
    allQuestionsMandatory: false,
    enableSkip: true,
    optionType: "radio",
    font: "arial",
    color: "#000000",
  };

  return (
    <ThemeContext.Provider value={value}>
      <BrowserRouter>
        <div className="App" style={{ height: "96vh" }}>
          <>
            <Header />
            <div style={{ display: "flex", height: "100%" }}>
              <div className="col-12">
                <Routes>
                  <Route exact path="/survey" element={<Survey />} />
                  <Route exact path="/survey/create" element={<Create />} />
                  <Route exact path="/survey/create/next" element={<Next />} />
                  <Route
                    exact
                    path="/survey/create/next/save"
                    element={<Save />}
                  />

                  <Route exact path="/" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </div>
            </div>
          </>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
