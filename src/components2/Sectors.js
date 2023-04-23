import "./Sectors.css";
import img2 from "../images2/Vector Smart Object.svg";
import img3 from "../images2/Vector Smart Object (1).svg";
import img4 from "../images2/Vector Smart Object (2).svg";
import img5 from "../images2/Vector Smart Object (3).svg";
import img7 from "../images2/Vector Smart Object (4).svg";
import img8 from "../images2/Vector Smart Object (5).svg";
import img9 from "../images2/Vector Smart Object (6).svg";
import img10 from "../images2/Vector Smart Object (7).svg";
import img11 from "../images2/Vector Smart Object (8).svg";

function Sectors() {
  return (
    <>
      <div className="Plan row">
        <center className="m-5 sect-head"><h1 >The Sectors We Work In<qw style={{color:"#82DECF"}}>.</qw></h1></center>
        <div className="sect col-sm-3"><img/>Food & Agriculture</div>
        <div className="sect col-sm-3"><img alt="" src={img2}/><br/>Construction & Engineering</div>
        <div className="sect col-sm-3"><img alt="" src={img3}/><br/>Banking & Finance</div>
        <div className="sect col-sm-3"><img alt="" src={img4}/><br/>Government & Community</div>
        <div className="sect col-sm-3"><img alt="" src={img5}/><br/>Healthcare & Life Sciences</div>
        <div className="sect col-sm-3">Media & Communications</div>
        <div className="sect col-sm-3"><img alt="" src={img7}/><br/>Mining & Resources</div>
        <div className="sect col-sm-3"><img alt="" src={img8}/><br/>Utilities & Renewables</div>
        <div className="end-row row"><div className="sect col-sm-3"><img alt="" src={img9}/><br/>Retail & CPG</div>
        <div className="sect col-sm-3"><img alt="" src={img10}/><br/>Manufacturing & Supply Chain</div>
        <div className="sect col-sm-3"><img alt="" src={img11}/><br/>Manufacturing & Supply Chain</div></div>
      </div>
    </>
  );
}

export default Sectors;
