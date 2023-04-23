import { Component } from "react";
import "./Navbar.css";
import Logo from "../images2/Logo.svg";
import Logo2 from "../images2/Logo2.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h4 className="navbar-logo">
          <img src={Logo} alt="Ecosystm" />
        </h4>
        <ul className="nav-menu">
          <li>
          <img src={Logo2} alt="Ecosystm" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
