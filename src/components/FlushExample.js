import Accordion from "react-bootstrap/Accordion";
import "./FlushExample.css";
import accImg from "../images/Vector Smart Object.png";
// import {tabsKeys} from "./AccCards.js"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function FlushExample() {
  return (
    <Accordion flush defaultActiveKey={"1"}>
      <Accordion.Item className="AItem" eventKey="0">
        <Accordion.Header>
          <span>About Ecosystm<span1>.</span1></span>
        </Accordion.Header>
        <Accordion.Body className="abody">
          <p>With over 130 enterprise clients around the world, Ecosystm works with
          some of the biggest technology providers and enterprises from across
          industries to help make the best decisions in this evolving digital
          economy.</p>
          <p>We bring the following services:</p> 
          <p>• Research-Led Strategy</p>
          <p>• Development Go-to-Market Strategy & Exceution for Technology Providers</p>
          <p>• Digital Blueprint Development & Execution for Enterprises </p>
          <p>Our core strength is based on the real-time market data augmented with some of
          the most relevant leading analysts comprising highly experienced
          analysts and consultants coupled with a team of very experienced
          practitioners who themselves have been C-suite leaders in the
          enterprise world.</p>
          <center>
          <img className="aimg" src={accImg}/>
          </center>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id="OurOfferings">
        <Accordion.Header>
          <span>Our Offerings<span1>.</span1></span>
        </Accordion.Header>
        <Accordion.Body className="abody" >
        <Row xs={1} md={2} className="g-4">
      
        <Col>
          <Card>
            <Card.Body>
            <div className="badge"><h3>1</h3></div>
              <Card.Title className="h1">Research & Insights</Card.Title>
              <Card.Text className="cText">
                <p>• Real-time primary market data</p>
                <p>• Deep analyst insight and reports</p>
                <p>• Access to best-in-class analysts and industry experts</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
            <div className="badge"><h3>2</h3></div>
            <Card.Title className="h1">Go-to-market</Card.Title>
              <Card.Text className="cText">
                <p>• Research based thought-leadership to amplify your Go-To-Market messaging</p>
                <p>• Facilitated Digital Leaders Roundtables</p>
                <p>• Access to Ecosystm’s growing global tech buyer community</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
            <div className="badge"><h3>3</h3></div>
            <Card.Title className="h1">Advisory</Card.Title>
              <Card.Text className="cText">
                <p>• Market Analysis & Competitive Assessments</p>
                <p>• Technology Roadmaps & Deep Industry Insights</p>
                <p>• Partner & Channel Research</p>
                <p>• Strategic Account Intelligence</p>
                <p>• Tailored Research & Advisory as per your requirements</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <div className="badge"><h3>4</h3></div>
            <Card.Title className="h1">End-user Consulting</Card.Title>
              <Card.Text className="cText">
                <p>• Strategy Development</p>
                <p>• Business Case Development</p>
                <p>• Procurement & Contracting</p>
                <p>• Program Governance</p>
                <p>&nbsp;</p>
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
    </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;
