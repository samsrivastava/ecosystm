import { Component } from "react";
import "./styles2/Contactbar.css";
import mail from "../images2/Group 218.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';


class Contactbar extends Component {
  render() {
    return (
    <div className="cbar">
      <nav className="ContactbarItems">
        <h2 className="xxctext" style={{color:"white"}}>
        Contact the <strong className="ctext">Ecosystm Consulting Team.</strong>
        </h2>
          <LazyLoadImage className="mail" src={mail} alt="Ecosystm" />
      </nav>
      </div>
    );
  }
}

export default Contactbar;
