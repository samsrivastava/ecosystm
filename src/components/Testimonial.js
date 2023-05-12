import "./testimonial.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from 'react-bootstrap/ListGroup';

function Testimonial() {
  return (
    <>
      <div className="plane3">
        <center>
          <h1 className="hel1">
            Testimonials<em>.</em>
          </h1>
          <CardGroup className="cdgrp">
            <Card className="m-3">
              <Card.Body className="card-body-test">
                <Card.Text className="crdtxt">
                  Ecosystm’s real time market insights and analyst expertise
                  specifically focused on the Asia Pacific market is very
                  valuable to us. Their engagement and account management is
                  always professional, and they consistently exceed our
                  expectations. I highly recommend them for both marketing and
                  analyst engagement initiatives.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="name">APJ Region Head of Corporate Analyst Relations<br/><em>HEWLETT PACKARD ENTERPRISE</em></ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="m-3 myth">
              <Card.Body className="card-body-test">
                <Card.Text className="crdtxt">
                  Ecosystm has redefined the traditional understanding and
                  expectations of technology research & advisory. It was a
                  pleasure working with the team, who is always thinking out of
                  the box to democratise the access to data and deliver tailored
                  thought-leadership content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="name">Deputy Director of<br/>Communications<br/><em>SGINNOVATE</em></ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="m-3 myth">
              <Card.Body className="card-body-test">
                <Card.Text className="crdtxt">
                  Ecosytm was excellent to work with both in the coordination of
                  the engagement and the expertise of the analyst in the
                  ultimate report. We are looking forward to the opportunity of
                  working together again.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="name">Director of Information<br/>Strategy<br/><em>AVEPOINT</em></ListGroup.Item>
              </ListGroup>
            </Card>
          </CardGroup>
        </center>
      </div>
    </>
  );
}

export default Testimonial;
