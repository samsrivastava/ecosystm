import Accordion from "react-bootstrap/Accordion";
import "./FlushExample.css";
import accImg from "../images/Vector Smart Object.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function FlushExample() {
  return (
    <>
      <Accordion flush defaultActiveKey={"1"}>
        <Accordion.Item className="AItem" eventKey="0">
          <Accordion.Header>
            <span className="Ahead">
              About Ecosystm<em>.</em>
            </span>
          </Accordion.Header>
          <Accordion.Body className="abody">
            <p>
              With over 130 enterprise clients around the world, Ecosystm works
              with some of the biggest technology providers and enterprises from
              across industries to help make the best decisions in this evolving
              digital economy.
            </p>
            <p>
              We bring the following services:
              <br />
              • Research-Led Strategy
              <br />
              • Development Go-to-Market Strategy & Exceution for Technology
              Providers
              <br />• Digital Blueprint Development & Execution for Enterprises{" "}
            </p>
            <p>
              Our core strength is based on the real-time market data augmented
              with some of the most relevant leading analysts comprising highly
              experienced analysts and consultants coupled with a team of very
              experienced practitioners who themselves have been C-suite leaders
              in the enterprise world.
            </p>
            <center>
              <img className="aimg" alt="" src={accImg} />
            </center>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" id="OurOfferings">
          <Accordion.Header>
            <span className="Ahead">
              Our Offerings<em>.</em>
            </span>
          </Accordion.Header>
          <Accordion.Body className="abody">
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Card>
                  <Card.Body>
                    <div className="badge">
                      <h3 className="h3">1</h3>
                    </div>
                    <br />
                    <br />
                    <Card.Title className="h1">Research & Insights</Card.Title>
                    <Card.Text className="cText">
                      <strong>• Real-time primary market data<br/>

                      • Deep analyst insight and reports<br/>
                      
                        • Access to best-in-class analysts and industry experts
                      </strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <div className="badge">
                      <h3 className="h3">2</h3>
                    </div>
                    <br />
                    <br />
                    <Card.Title className="h1">Go-to-market</Card.Title>
                    <Card.Text className="cText">
                      <strong>
                        • Research based thought-leadership to amplify
                        your Go-To-Market messaging
                      <br/>
                      • Facilitated Digital Leaders Roundtables</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <div className="badge">
                      <h3 className="h3">3</h3>
                    </div>
                    <br />
                    <br />
                    <Card.Title className="h1">Advisory</Card.Title>
                    <Card.Text className="cText">
                      <strong>• Market Analysis & Competitive Assessments<br/>
                      • Technology Roadmaps & Deep Industry Insights<br/>
                      • Partner & Channel Research<br/>
                      • Strategic Account Intelligence<br/>
                    
                        • Tailored Research & Advisory as per your requirements
                      </strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <div className="badge">
                      <h3 className="h3">4</h3>
                    </div>
                    <br />
                    <br />
                    <Card.Title className="h1">End-user Consulting</Card.Title>
                    <Card.Text className="cText">
                      <strong>• Strategy Development<br/>
                      • Business Case Development<br/>
                      • Procurement & Contracting<br/>
                      • Program Governance<br/>
                      &nbsp;</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FlushExample;
