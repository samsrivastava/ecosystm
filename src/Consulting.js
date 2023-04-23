import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components2/Hero";
import Navbar from "./components2/Navbar";
import TwoCol from "./components2/TwoCol";
import RevTwoCol from "./components2/RevTwoCol"; 
import Planning from "./components2/Planning";
import Footer from "./components2/Footer";
import Sectors from "./components2/Sectors";
import Contactbar from "./components2/Contactbar";

// Ananlysts Photos and sidebar of nav

function Consulting() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TwoCol/>
    <RevTwoCol/>
    <Planning/>
    <Sectors/>
    <Contactbar/>
    <Footer/>
    </>
  );
}

export default Consulting;
