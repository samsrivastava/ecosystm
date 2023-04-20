import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    </>
  );
};
