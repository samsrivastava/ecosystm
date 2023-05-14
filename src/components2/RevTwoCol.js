import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./RevTwoCol.css";
import Value from "../images2/Value.png";
import Button from "react-bootstrap/Button";
import L1 from "../images2/Ellipse 5.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function RevTwoCol() {
  return (
    <>
      <Row xs={1} md={2} className="g-4-Rev" id="EcosystmTV">
        <Col className="con-RevleftCol-Rev">
          <LazyLoadImage className="img-fluid value" alt="" src={Value}/>
        </Col>

        <Col className="RevrightCol-Rev">
          <h1 className="con-ETV xx">Strategy to</h1>
          <h1 className="con-ETV">
            Execution<s className="con-ETV-fullstop">.</s>
          </h1>
          <p className="con-rev-p">
            Ecosystm Consulting’s insights to execution approach guides clients
            across four focus areas: Aim Well, Plan Well, Buy Well, and
            Implement Well. Each focus area addresses specific challenges and
            opportunities and provides clients with a clear roadmap for success.
          </p>
          <h3 className="h3-con">Aim Well</h3>
          <div className="con-rev-div">
            The Aim Well focus area helps clients establish clear strategies,
            goals and objectives.
          </div>
          <h3 className="h3-con">Plan Well</h3>
          <div className="con-rev-div">
            The Plan Well focus area helps clients develop a detailed plan of
            action.
          </div>
          <h3 className="h3-con">Buy Well</h3>
          <div className="con-rev-div">
            The Buy Well focus area helps clients make the right purchasing
            decisions.
          </div>
          <h3 className="h3-con">Implement Well</h3>
          <div className="con-rev-div">
            The Implement Well focus area helps clients successfully implement
            the plan.
          </div>
          <center>
            <div className="d-grid gap-2 con-bttn">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://blog.ecosystm360.com/ecosystm-tv/";
                }}
                className="Revbtn"
                size="lg"
              >
                <span className="con-txt-btn">Learn More</span>
                <div>
                  <LazyLoadImage className="LL1" alt="" src={L1} />
                </div>
              </Button>
            </div>
          </center>
        </Col>
      </Row>
    </>
  );
}

export default RevTwoCol;
