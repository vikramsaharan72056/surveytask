import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Survey from "./screen/Survey";
import Create from "./screen/Create";
import Next from "./screen/Next";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/survey" element={<Survey />} />
          <Route exact path="/survey/create" element={<Create />} />
          <Route exact path="/survey/create/next" element={<Next />} />

          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/createuser" element={<Signup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
