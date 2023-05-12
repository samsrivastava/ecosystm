import "./Herostyles.css";
import Line from "../images/Line.svg";
import HeroImg from "../images/pexels-anni-roenkae-2318068.png";

function Hero() {
  return (
    <>
      <div className="hero">
        <img className="hero-img" alt="heroImg"
        src={HeroImg}
        />
        <div className="hero-text">
            <h1>Trusted Market</h1>
            <h1>Research and Insights<strong className="fullstop">.</strong></h1>
        </div>
            <img className="Line" alt="" src={Line}/>
      </div>
    </>
  );
}

export default Hero;
