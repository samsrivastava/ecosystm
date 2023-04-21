import "./LogoSlider.css";
import HPE from "../images/HPE.svg";
import MS from "../images/MS.svg";
import ZOOM from "../images/ZOOM.svg";
import IBM from "../images/IBM.svg";
import AWS from "../images/AWS.svg";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function LogoSlider() {
    return (
      <div className="slide">
            <div className="side-line"><p className="side-text">Our Customers Include<span1>.</span1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>
        <div className="inslider">
          <div className="actualSlider animate">
           
                <div className="logos">
                  <img alt="Microsoft" src={MS} />
                </div>
                <div className="logos">
                  <img alt="Microsoft" src={ZOOM} />
                </div>
                <div className="logos">
                  <img alt="Microsoft" src={HPE} />
                </div>
                <div className="logos">
                  <img alt="Microsoft" src={IBM} />
                </div>
                <div className="logos">
                  <img alt="Microsoft" src={AWS} />
                </div>
                <div className="logos">
                  <img alt="Microsoft" src={MS} />
                </div>
                <div className="logos">
                  <img alt="Microsoft" src={ZOOM} />
                </div>
                <div className="logos">
                  <img alt="Microsoft" src={HPE} />
                </div>
                <div className="logos">
                  <img alt="Microsoft" src={IBM} />
                </div>
                <div className="logos">
                  <img alt="Microsoft" src={AWS} />
                </div>
              
            
                
             
          </div>
        </div>
      </div>
    );
  }