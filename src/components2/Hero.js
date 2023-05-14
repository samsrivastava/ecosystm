import "./Hero.css";
import Line from "../images2/Line.png";
import HeroImg from "../images/pexels-anni-roenkae-2318068.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Hero() {
  return (
    <>
      <div className="hero">
        <LazyLoadImage onClick={(e) => {
      e.preventDefault();
      window.location.href='/';
      }} className="hero-img" alt="heroImg"
        src={HeroImg}
        />
        <div className="con-hero-text">
            <h1>Ecosystm Consulting:</h1>
            <h1>Your 21st Century Partner<s>.</s>
            </h1>
            <LazyLoadImage className="Line2" alt="" src={Line}/>
        </div>
      </div>
    </>
  );
}

export default Hero;
