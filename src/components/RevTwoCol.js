import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./RevTwoCol.css";
import EcoTV from "../images/EcosystmTV.png";
import Button from 'react-bootstrap/Button';
import LL from "../images/Group\ 469\ \(1\).svg";
import Tri2 from "../images/Triangle-2.png"

function RevTwoCol() {
  return (
    <><img className="tri2" alt="" src={Tri2} />
      <Row xs={1} md={2} className="g-4-Rev" id="EcosystmTV">
        <Col className="RevleftCol-Rev">
        <img className="img-fluid" alt="" src={EcoTV} />
        </Col>
        <Col className="RevrightCol-Rev">
        <h1 className="ETV">EcosystmTV<span1>.</span1></h1>
          <p>
            Interviews from business leaders, opinions from
            Ecosystm Analysts and EcosystemTV <br /> Bytes.
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
      window.location.href='https://blog.ecosystm360.com/ecosystm-tv/';
      }} className="Revbtn" size="lg">
              <span>Watch EcosystmTV</span><span2><img className="LL" alt="" src={LL}/></span2>
            </Button>
          </div>
          </center>
        </Col>
      </Row>
    </>
  );
}

export default RevTwoCol;
