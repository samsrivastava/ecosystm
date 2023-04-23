import "./Hero.css";
import Line from "../images2/Line.png";
import HeroImg from "../images/pexels-anni-roenkae-2318068.png";

function Hero() {
  return (
    <>
      <div className="hero">
        <img className="hero-img" alt="heroImg"
        src={HeroImg}
        />
        <div className="con-hero-text">
            <h1>Ecosystm Consulting:</h1>
            <h1>Your 21st Century<king> Partner</king><spanx>.</spanx>
            </h1>
            <img className="Line2" src={Line}/>
        </div>
      </div>
    </>
  );
}

export default Hero;
