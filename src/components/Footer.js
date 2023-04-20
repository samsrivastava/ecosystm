import "./Footer.css";
import Button from 'react-bootstrap/Button';
import LLA from "../images/Group 467.svg";
import Container from 'react-bootstrap/Container';
import linkedIn from "../images/LinkedIn.svg";
import twitter from "../images/Twitter.svg";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LogoCopy from "../images/Logo copy.svg"



function Footer() {
    return (
      <>
        <div className="plane4">
        <div className="center-box-footer">
        <div className="box-footer"><h1 className="learn">Learn More.</h1>
        <div className="box2-footer">Want to understand more about how Ecosystm can help, please visit our contact us page and we will be in touch!</div>
        <div className="d-grid gap-2 Foobttn btn-primary-footer mt-5">
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.ecosystm360.com/#/contact-us';
      }} className="Foobtn" size="md">
              <span className="ConUS">Contact Us</span><span2><img className="LL" alt="" src={LLA}/></span2>
            </Button>
          </div>
        </div>
        </div>
        <div className="FooterNav">
        <ul className="UlFoot">
              <li className="t-all" >
                <a className="foot" href="https://www.ecosystm360.com/#/contact-us">
                  Contact Us
                </a>
              </li>
              <li className="t-all">
                <a className="foot" href="https://www.ecosystm360.com/#/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li className="t-all">
                <a className="foot" href="https://www.ecosystm360.com/#/terms-of-use">
                  Terms of Use
                </a>
              </li>
              <li className="t-all">
                <a href="https://twitter.com/ecosystm360">
                  <img className="foot" alt="" src={linkedIn}/>
                </a>
                <a href="https://www.linkedin.com/company/ecosystm360/mycompany/">
                  <img className="foot" alt="" src={twitter}/>
                </a>
            </li>
        </ul>
        </div>
        <hr className="fooHr"/>
        <div>
            <img className="logocopy" alt="" src={LogoCopy}/>
            <h4 className="copyright">©2023 Ecosystm. All rights reserved</h4>
        </div>
      </div>
      </>
    );
  }
  
  export default Footer;
  