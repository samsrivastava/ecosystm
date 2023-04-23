import { Component } from "react";
import "./Contactbar.css";
import Logo from "../images2/Logo.svg";
import mail from "../images2/Group 218.png";

class Contactbar extends Component {
  render() {
    return (
    <div className="cbar">
      <nav className="ContactbarItems">
        <h2 style={{color:"white"}}>
        Contact the <qw className="ctext">Ecosystm Consulting Team.</qw>
        </h2>
          <img src={mail} alt="Ecosystm" />
      </nav>
      </div>
    );
  }
}

export default Contactbar;
