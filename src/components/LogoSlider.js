import "./LogoSlider.css";
import HPE from "../images/HPE.svg";
import MS from "../images/MS.svg";
import ZOOM from "../images/ZOOM.svg";
import IBM from "../images/IBM.svg";
import AWS from "../images/AWS.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LogoSlider() {
  return (
    <div className="slide">
      <div className="side-line">
        <div className="aisehi">
          <p className="side-text">
            Our Customers Include<em>.</em>
          </p>
        </div>
      </div>
      <div className="inslider">
        <div className="actualSlider animate">
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={MS} />
          </div>
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={ZOOM} />
          </div>
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={HPE} />
          </div>
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={IBM} />
          </div>
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={AWS} />
          </div>
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={MS} />
          </div>
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={ZOOM} />
          </div>
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={HPE} />
          </div>
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={IBM} />
          </div>
          <div className="logos">
            <LazyLoadImage alt="Microsoft" src={AWS} />
          </div>
        </div>
      </div>
    </div>
  );
}
