import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./kompd.css";
import kamp from "../images/Kamp.png";
import Button from 'react-bootstrap/Button';
import LL from "../images/Group 469 (1).svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Kompd() {
  return (
    <>
      <Row xs={1} md={2} className="g-4" id="kampd">
        <Col className="RevleftCol">
        <LazyLoadImage className="img-fluid" alt="" src={kamp} />
        </Col>
        <Col className="RevrightCol">
        <h1 className="Kampd">Kampd<em>.</em></h1>
          <p className="phone">
            Kampd, short for "Knowledge Amplified" is platform for professional
            communities and content. Join the Kampd to build
            your own community around shared interest.
          </p>
          <br />
          <center>
          <hr className="hr" />
          </center>
          <br />
          <center>
          <div className="d-grid gap-2 Revbttn">
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.kampd.com/';
      }} className="Revbtn" size="lg">
              <span className="txt-btn-kompd">Visit the Kampd Website</span><pre><LazyLoadImage className="LL abc" alt="" src={LL}/></pre>
            </Button>
          </div>
          </center>
        </Col>
      </Row>
    </>
  );
}

export default Kompd;
