import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TwoCol.css";
import twocol from "../images/TwoCol.png";
import Button from 'react-bootstrap/Button';
import LL from "../images/Group\ 469\ \(1\).svg";

function TwoCol() {
  return (
    <>
      <Row xs={1} md={2} className="g-4-twocol">
        <Col className="leftCol-twocol">
          <h1 className="Esys">Ecosystm</h1>
          <h1 className="Esys">
            Insights<span1>.</span1>
          </h1>
          <p>
            Latest Insights from the Ecosystm Analyst team and
            
            contributions from the Ecosystm<br /> Community.
          </p>
          <br />
          <center>
          <hr className="hr" />
          </center>
          <br />
          <center>
          <div className="d-grid gap-2 bttn">
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://blog.ecosystm360.com/';
      }} className="btn" size="lg">
              <span>View All Ecosystm Insights</span><span2><img className="LL" alt="" src={LL}/></span2>
            </Button>
          </div>
          </center>
        </Col>
        <Col className="rightCol-twocol">
          <img className="img-fluid" alt="" src={twocol} />
        </Col>
      </Row>
    </>
  );
}

export default TwoCol;
