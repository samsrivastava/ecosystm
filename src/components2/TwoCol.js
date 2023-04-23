import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TwoCol.css";
import twocol from "../images2/Group 428.png";
import Button from "react-bootstrap/Button";
import LL from "../images/Group 469 (1).svg";

function TwoCol() {
  return (
    <>
      <Row xs={1} md={2} className="g-4-twocol" id="insights">
        <Col className="leftCol-twocol">
          <h1 className="con-sys">The Ecosystm</h1>
          <h1 className="con-sys">
            Consulting Matrix<spanx>.</spanx>
          </h1>
          <p>
            Organisations are experiencing challenges at a velocity never seen
            before. The vision for Ecosystm Consulting is to help businesses
            navigate transformation challenges in the digital age. <br/><br/>The Ecosystm
            Consulting Matrix is a framework that helps our clients achieve
            specific digitisation, optimisation, transformation, and innovation
            goals, as well as sustainability outcomes. It considers the needs of
            customers and partners; the industries and sectors in which they
            operate; and the strategies and technologies that are relevant to
            achieving their goals.
          </p>
          <br />
        </Col>
        <Col className="con-rightCol-twocol">
          <img className="img-fluid con-twoCol" alt="" src={twocol} />
        </Col>
      </Row>
    </>
  );
}

export default TwoCol;
