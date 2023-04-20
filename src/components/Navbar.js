import { Component } from "react";
import "./navbarStyles.css";
import Logo from "../images/Logo.svg";
import NavDropdown from "react-bootstrap/NavDropdown";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h4 className="navbar-logo">
          <img src={Logo} alt="Ecosystm" />
        </h4>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            class={this.state.clicked ? "fa-solid fa-x" : "fa-solid fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavDropdown
              className="nav-links"
              id="nav-dropdown-dark-example"
              title="Home"
              menuVariant="dark"
            >
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#action/3.1"
              >
                Our Offerings
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#action/3.2"
              >
                Analysts
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#action/3.3"
              >
                Team Ecosystm
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#action/3.4"
              >
                Media
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#action/3.3"
              >
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <li>
            <NavDropdown
              className="nav-links"
              id="nav-dropdown-dark-example"
              title="Research and Content"
              menuVariant="dark"
            >
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#action/3.1"
              >
                Insights
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#action/3.2"
              >
                EcosystmTV
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <li>
            <a className="nav-links" href="/Consulting">
              Consulting
            </a>
          </li>
          <li>
            <NavDropdown
              className="nav-links"
              id="nav-dropdown-dark-example"
              title="Community"
              menuVariant="dark"
            >
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#action/3.1"
              >
                Events
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#action/3.2"
              >
                Kampd
              </NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
