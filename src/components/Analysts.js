import "./Analysts.css";
import Clip from "../images/Clip.png"
import Button from 'react-bootstrap/Button';
import LL from "../images/Group\ 469\ \(1\).svg";
import f1 from "../images/Rectangle 9.png";
import f2 from "../images/Rectangle 9 copy.png";
import f3 from "../images/Rectangle 9 copy 2.png";
import f4 from "../images/Rectangle 9 copy 3.png";
import f5 from "../images/Rectangle 9 copy 4.png";
import f11 from "../images/Rectangle 9 copy 5.png";
import f6 from "../images/Rectangle 9 copy 6.png";
import f7 from "../images/Rectangle 9 copy 7.png";
import f8 from "../images/Rectangle 9 copy 8.png";
import f9 from "../images/Rectangle 9 copy 9.png";
import f10 from "../images/Rectangle 9 copy 10.png";

function Analysts() {
  return (
    <>
      <div className="plane" id="analysts">
        <img alt="" src={f1} className="f1 myth"/>
        <img alt="" src={f2} className="f2 myth"/>
        <img alt="" src={f3} className="f3 myth"/>
        <img alt="" src={f4} className="f4 myth"/>
        <img alt="" src={f5} className="f5 myth"/>
        <img alt="" src={f6} className="f6 myth"/>
        <img alt="" src={f7} className="f7 myth"/>
        <img alt="" src={f8} className="f8 myth"/>
        <img alt="" src={f9} className="f9 myth"/>
        <img alt="" src={f10} className="f10 myth"/>
        <img alt="" src={f11} className="f11 myth"/>
        <center className="center-box">
        <div className="box"><h1 className="h1-box">Ecosystm Analysts<span1>.</span1></h1>
        <br/>
        <br/>
        <br/>
        <div className="box2">Ecosystm Analysts come from a variety of backgrounds that include career analysts, CIOs and business leaders, and domain experts with decades of experience in their field.</div>
        <br/>
        <br/>
        <br/>
        <div className="d-grid gap-2 Anabttn mt-5">
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.ecosystm360.com/#/analyst-list';
      }}  className="abtn" size="lg">
              <span>View All Ecosystm Analysts</span><span2><img className="LL" alt="" src={LL}/></span2>
            </Button>
          </div>
        </div>
        </center>
        <img className="clip" alt="" src={Clip}/>
      </div>
    </>
  );
}

export default Analysts;
