import "./Management.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Grp1 from "../images/Group 13.png";
import Grp2 from "../images/Group 13 copy.png";
import Grp3 from "../images/Group 13 copy 2.png";
import Button from 'react-bootstrap/Button';
import LL from "../images/Group 469 (1).svg";

function Management() {
  return (
    <>
      <div className="plane2">
        <center>
          <div className="community">
            <div className="pill">ECOSYSTM COMMUNITY</div>
          </div>
          <h1 className="hel">
            Executive Engagements<em>.</em>
          </h1>
          <h5 className="hel2">
            Invitation only gatherings hosted by Ecosystm analysts where
            industry leaders gather to learn, share, and network with other
            senior business, technology, and digital leaders.
          </h5>
          <CardGroup className="cdgrp">
            <Card className="m-3 myth">
              <Card.Img className="img-fluid" variant="top" src={Grp1} />
            </Card>
            <Card className="m-3">
              <Card.Img className="img-fluid" variant="top" src={Grp2}/>
            </Card>
            <Card className="m-3 myth">
              <Card.Img className="img-fluid" variant="top" src={Grp3} />
            </Card>
          </CardGroup>
        </center>
          <div className="d-grid gap-2 management-bttn">
            <Button className="manage-btn " size="md">
              <span className="mbtn">View All Ecosystm Gatherings</span><pre><img className="LL" alt="" src={LL}/></pre>
            </Button>
          </div>
      </div>
    </>
  );
}

export default Management;
