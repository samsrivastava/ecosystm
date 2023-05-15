import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles1/TwoCol.css";
import twocol from "../images/TwoCol.png";
import Button from "react-bootstrap/Button";
import LL from "../images/Group 469 (1).svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function TwoCol() {
  return (
    <>
      <Row xs={1} md={2} className="g-4-twocol" id="insights">
        <Col className="leftCol-twocol">
          <h1 className="Esys">Ecosystm</h1>
          <h1 className="Esys">
            Insights<em>.</em>
          </h1>
          <p>
            Latest Insights from the Ecosystm Analyst team and contributions
            from the Ecosystm Community.
          </p>
          <br />
          <center>
            <hr className="hr" />
          </center>
          <br />
          
            {/* <div className="d-grid gap-2 bttn">
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://blog.ecosystm360.com/';
      }} className="btn" size="lg">
              <span className="txt-btn">View All Ecosystm Insights</span><pre><img className="LL abc" alt="" src={LL}/></pre>
            </Button>
          </div> */}
            <div>
              <Button className="qwerty"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://blog.ecosystm360.com/";
                }}
              >View All Ecosystm Insights <img className="xyz" alt="" src={LL}/></Button>
            </div>
          
        </Col>
        <Col className="rightCol-twocol">
          <LazyLoadImage className="img-fluid" alt="" src={twocol} />
        </Col>
      </Row>
    </>
  );
}

export default TwoCol;
