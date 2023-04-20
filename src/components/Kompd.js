import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./kompd.css";
import kamp from "../images/Kamp.png";
import kampRight from "../images/kampRight.svg"
import Button from 'react-bootstrap/Button';
import LL from "../images/Group\ 469\ \(1\).svg";

function Kompd() {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col className="RevleftCol">
        <img className="img-fluid" alt="" src={kamp} />
        </Col>
        <Col className="RevrightCol">
        <h1 className="Kampd">Kampd<span1>.</span1></h1>
          <p className="phone">
            Kampd, short for "Knowledge Amplified" is platform for professional
            <br />
            communities and content. Join the Kampd to build
            <br/>
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
              <span>Visit the Kampd Website</span><span2><img className="LL" alt="" src={LL}/></span2>
            </Button>
          </div>
          </center>
        </Col>
      </Row>
    </>
  );
}

export default Kompd;
