import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage.js";
import Consulting from "./Consulting.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/consulting" element={<Consulting/>} />

        </Routes>
      </Router>
    </>
  );
};
