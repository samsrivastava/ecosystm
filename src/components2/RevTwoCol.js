import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./RevTwoCol.css";
import Value from "../images2/Value.png";
import Button from "react-bootstrap/Button";
import L1 from "../images2/Ellipse 5.svg";

function RevTwoCol() {
  return (
    <>
      <Row xs={1} md={2} className="g-4-Rev" id="EcosystmTV">
        <Col className="con-RevleftCol-Rev">
          <img className="img-fluid value" alt="" src={Value}></img>
        </Col>

        <Col className="RevrightCol-Rev">
          <h1 className="con-ETV xx">Strategy to</h1>
          <h1 className="con-ETV">
            Execution<spanx className="con-ETV-fullstop">.</spanx>
          </h1>
          <p className="con-rev-p">
            Ecosystm Consulting’s insights to execution approach guides clients
            across four focus areas: Aim Well, Plan Well, Buy Well, and
            Implement Well. Each focus area addresses specific challenges and
            opportunities and provides clients with a clear roadmap for success.
          </p>
          <h3 className="h3-con">Aim Well</h3>
          <p1 className="con-rev-p1">
            The Aim Well focus area helps clients establish clear strategies,
            goals and objectives.
          </p1>
          <h3 className="h3-con">Plan Well</h3>
          <p1 className="con-rev-p1">
            The Plan Well focus area helps clients develop a detailed plan of
            action.
          </p1>
          <h3 className="h3-con">Buy Well</h3>
          <p1 className="con-rev-p1">
            The Buy Well focus area helps clients make the right purchasing
            decisions.
          </p1>
          <h3 className="h3-con">Implement Well</h3>
          <p1 className="con-rev-p1">
            The Implement Well focus area helps clients successfully implement
            the plan.
          </p1>
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
                <span99>
                  <img className="LL1" alt="" src={L1} />
                </span99>
              </Button>
            </div>
          </center>
        </Col>
      </Row>
    </>
  );
}

export default RevTwoCol;
