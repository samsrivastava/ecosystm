import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AnoTwoCol.css";
import Rect from "../images/Rectangle 22.png";
import Button from 'react-bootstrap/Button';
import LL from "../images/Group 469 (1).svg";
import Log from "../images/Vector Smart Object copy 9.svg";

function AnoTwoCol() {
  return (
    <>
      <Row xs={1} md={2} className="g-4-Ano">
        <Col className="leftCol-Ano">
          <h1 className="Esys">Ecosystm</h1>
          <h1 className="Esys">
            Consulting<em>.</em>
          </h1>
          <p className="psys">
            Ecosystm Consulting levereges a wealth of technical, functional and  
            industry-specific expertise to craft customised thought models and frameworks
            that deliver measurable results for our valued customers.
          </p>
          <br />
          <center>
          <hr className="hr" />
          </center>
          <br />
          <center>
          <div className="d-grid gap-2 bttn">
            <Button className="btn" size="lg">
              <span className="ano-txt-btn">Learn More</span><pre><img className="LL" alt="" src={LL}/></pre>
            </Button>
          </div>
          </center>
        </Col>
        <Col className="rightCol-Ano">
          <img className="Log img-fluid" alt="" src={Log}/>
          <img className="img-fluid" alt="" src={Rect} ></img>
          {/* <img className="Log img-fluid" alt="" src={Log}/> */}
        </Col>
      </Row>
    </>
  );
}

export default AnoTwoCol;
