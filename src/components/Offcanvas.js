import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/Logo.svg";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./styles1/ofcanvas.css";
import "./styles1/navbarStyles.css";
import { useState } from 'react';



function OffcanvasNavbar() {

  const [show, setShow] = useState(false);

  const toggleOffCanvas = () => {

    if (window.innerWidth < 992) {
      setShow((show) => !show);
   }
  };

  const location=(x)=>{
    setTimeout(function(){window.location=x},500);
  }

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 NavbarItems">
          <Container fluid>
          <h4 className="navbar-logo">
          <img src={Logo} onClick={(e) => {
      e.preventDefault();
      window.location.href='/';
      }} alt="Ecosystm"/>
        </h4>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleOffCanvas}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
              onHide={toggleOffCanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <h4 className="navbar-logo">
          <img src={Logo} alt="Ecosystm"/>
        </h4>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-1 nav-menu">
                <NavDropdown
              className="nav-links"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
              title="About Us"
              menuVariant="dark"
            >
              <NavDropdown.Item
                className="nav-links-dropdown"
                onClick={function(event){ toggleOffCanvas(); location("#OurOfferings");}}
              >
                Our Offerings
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                onClick={function(event){ toggleOffCanvas(); location("#analysts");}}
              >
                Analysts
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="https://www.ecosystm360.com/#/about-us"
              >
                Team Ecosystm
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="https://blog.ecosystm360.com/media/"
              >
                Media
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="https://www.ecosystm360.com/#/contact-us"
              >
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="nav-links"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
              title="Research and Content"
              menuVariant="dark"
            >
              <NavDropdown.Item
                className="nav-links-dropdown"
                onClick={function(event){ toggleOffCanvas(); location("#insights");}}
              >
                Insights
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                onClick={function(event){ toggleOffCanvas(); location("#EcosystmTV");}}
              >
                EcosystmTV
              </NavDropdown.Item>
            </NavDropdown>
                  <Nav.Link className="nav-links" href="/consulting">Consulting</Nav.Link>
                  <NavDropdown
              className="nav-links"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
              title="Community"
              menuVariant="dark"
            >
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="https://blog.ecosystm360.com/events/"
              >
                Events
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                onClick={function(event){ toggleOffCanvas(); location("#kampd");}}
              >
                Kampd
              </NavDropdown.Item>
            </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasNavbar;