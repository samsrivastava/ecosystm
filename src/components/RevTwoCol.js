import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles1/RevTwoCol.css";
import EcoTV from "../images/EcosystmTV.png";
import Button from 'react-bootstrap/Button';
import LL from "../images/Group 469 (1).svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function RevTwoCol() {
  return (
    <>
      <Row xs={1} md={2} className="g-4-Rev" id="EcosystmTV">
        <Col className="RevleftCol-Rev">

        <LazyLoadImage className="img-fluid" alt="" src={EcoTV}/>
        </Col>
      
        <Col className="RevrightCol-Rev">
        <h1 className="ETV">EcosystmTV<em>.</em></h1>
          <p>
            Interviews from business leaders, opinions from
            Ecosystm Analysts and EcosystemTV Bytes.
          </p>
          <br />
          <center>
          <hr className="hr" />
          </center>
          <br />
          {/* <center>
          <div className="d-grid gap-2 Revbttn">
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://blog.ecosystm360.com/ecosystm-tv/';
      }} className="Revbtn" size="lg">
              <span className="rev-txt-btn">Watch EcosystmTV</span><pre><LazyLoadImage className="LL abc" alt="" src={LL}/></pre>
            </Button>
          </div>
          </center> */}
          <div>
              <Button className="qwerty"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://blog.ecosystm360.com/ecosystm-tv/';
                }}
              >Watch EcosystmTV <img className="xyz" alt="" src={LL}/></Button>
            </div>
        </Col>
      </Row>
    </>
  );
}

export default RevTwoCol;
