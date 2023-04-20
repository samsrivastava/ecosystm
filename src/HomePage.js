import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero"
import FlushExample from "./components/FlushExample";
import TwoCol from "./components/TwoCol";
import RevTwoCol from "./components/RevTwoCol"; 
import Analysts from "./components/Analysts";
import AnoTwoCol from "./components/AnoTwoCol";
import Management from "./components/Management";
import Testimonial from "./components/Testimonial";
import LogoSlider from "./components/LogoSlider";
import Kompd from "./components/Kompd";
import Footer from "./components/Footer";
import OffcanvasNavbar from "./components/Offcanvas";

// Ananlysts Photos and sidebar of nav

function HomePage() {
  return (
    <>
    <OffcanvasNavbar/>
    {/* <Navbar/> */}
    <Hero/>
    <FlushExample/>
    <TwoCol/>
    <RevTwoCol/>
    <Analysts/>
    <AnoTwoCol/>
    <Management/>
    <Testimonial/>
    <LogoSlider/>
    <Kompd/>
    <Footer/>
    </>
  );
}

export default HomePage;
