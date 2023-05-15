import "./styles2/Footer.css";
import Button from 'react-bootstrap/Button';
import LLA from "../images/Group 467.svg";
import linkedIn from "../images/LinkedIn.svg";
import twitter from "../images/Twitter.svg";
import LogoCopy from "../images/Logo copy.svg";
import footimg from "../images/Layer-511-copy.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';





function Footer() {
    return (
      <>
        <div className="plane5">
        <div className="con-center-box-footer row">
        <div className="box-footer col-sm-6"><h1 className="learn">Learn More.</h1>
        <div className="con-box2-footer col-sm-6">Want to understand more about how Ecosystm can help, please visit our contact us page and we will be in touch!</div>
        <div>
              <Button className="qwertz Foobtn  mt-5"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://www.ecosystm360.com/#/contact-us';
                }}
              >Contact Us <img className="xyz" alt="" src={LLA}/></Button>
            </div>
        </div>
        <LazyLoadImage className="col-sm-6 fooimg" alt="" src={footimg}/>
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
                  <LazyLoadImage className="foot" alt="" src={linkedIn}/>
                </a>
                <a href="https://www.linkedin.com/company/ecosystm360/mycompany/">
                  <LazyLoadImage className="foot" alt="" src={twitter}/>
                </a>
            </li>
        </ul>
        </div>
        <hr className="fooHr"/>
        <div>
            <LazyLoadImage className="logocopy" alt="" src={LogoCopy}/>
            <h4 className="copyright">©2023 Ecosystm. All rights reserved</h4>
        </div>
      </div>
      </>
    );
  }
  
  export default Footer;
  