import { Component } from "react";
import "./Navbar.css";
import Logo from "../images2/Logo.svg";
import Logo2 from "../images2/Logo2.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h4 className="navbar-logo">
          <img className="nav-logo" src={Logo} onClick={(e) => {
      e.preventDefault();
      window.location.href='/';
      }} alt="Ecosystm" />
        </h4>
        <h4 className="navbar-logo">
          <img className="nav-logo2" src={Logo2} alt="Ecosystm" />
        </h4>
      </nav>
    );
  }
}

export default Navbar;
