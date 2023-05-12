import { Component } from "react";
import "./Contactbar.css";
import mail from "../images2/Group 218.png";

class Contactbar extends Component {
  render() {
    return (
    <div className="cbar">
      <nav className="ContactbarItems">
        <h2 className="xxctext" style={{color:"white"}}>
        Contact the <strong className="ctext">Ecosystm Consulting Team.</strong>
        </h2>
          <img className="mail" src={mail} alt="Ecosystm" />
      </nav>
      </div>
    );
  }
}

export default Contactbar;
