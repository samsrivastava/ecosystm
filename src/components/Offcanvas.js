import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/Logo.svg";
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasNavbar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 NavbarItems">
          <Container fluid>
          <h4 className="navbar-logo">
          <img src={Logo} alt="Ecosystm"/>
        </h4>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
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
                href="#OurOfferings"
              >
                Our Offerings
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#analysts"
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
                href="#insights"
              >
                Insights
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links-dropdown"
                href="#EcosystmTV"
              >
                EcosystmTV
              </NavDropdown.Item>
            </NavDropdown>
                  <Nav.Link className="nav-links" href="#action2">Consulting</Nav.Link>
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
                href="#kampd"
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