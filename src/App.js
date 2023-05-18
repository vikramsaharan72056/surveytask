import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Survey from "./screen/Survey";
import Create from "./screen/Create";
import Next from "./screen/Next";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Save from "./screen/Save";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <>
        <Header />
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ height: "100%" }}>
            <Sidebar />
          </div>
          <div className="col-12">
            <Routes>
              {/* <Route exact path="/" element={<Home />} /> */}
              <Route exact path="/survey" element={<Survey />} />
              <Route exact path="/survey/create" element={<Create />} />
              <Route exact path="/survey/create/next" element={<Next />} />
              <Route exact path="/survey/create/next/save" element={<Save />} />

              <Route exact path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
