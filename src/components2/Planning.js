import Value from "../images2/Value.png";
import "./Planning.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Planning() {
  return (
    <>
      <div className="Planning">
        <div className="upper-div row">
          <div className="right-div col-sm-4">
            <div className="card-div">
              <h4 className="plans" style={{color: "#407066"}}>AIM WELL</h4>
              <h3 className="h3-con">Service Areas:</h3>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Design-thinking and Innovation Ideation
              </div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Peer Assessment and Service Review
              </div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Digital Strategy Design</div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> IT Strategy Development</div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Integrated Change Strategy</div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Stakeholder Engagement and Consultation
              </div>
            </div>
          </div>
          <div className="center-div col-sm-3">
            <div className="card-div"></div>
          </div>
          <div className="left-div col-sm-4">
          <div className="card-div">
              <h4 className="plans" style={{color: "#407066"}}>PLAN WELL</h4>
              <h3 className="h3-con">Service Areas:</h3>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Strategic Planning Frameworks
              </div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Current State Assessments
              </div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Stakeholder Prioritisation</div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Target Operating Models</div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Solution Options Analysis</div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Implementation Planning
              </div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Benefits and Change Planning
              </div>
            </div>
          </div>
        </div>
        <div className="image-div">
          <LazyLoadImage className="img-fluid value" alt="" src={Value}/>
        </div>
        <div className="lower-div row">

          <div className="right-div col-sm-4">
            <div className="card-div">
              <h4 className="plans" style={{color: "#407066"}}>IMPLEMENT WELL</h4>
              <h3 className="h3-con">Service Areas:</h3>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Independent Advisory Support
              </div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em>  Industry & Functional Expertise
              </div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Peer Review & Assurance</div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Third-party Validation</div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Risk Assessments & Mitigation</div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Project Mobilisation and Management
              </div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Technical Delivery & Support
              </div>
            </div>
          </div>
          <div className="center-div col-sm-3">
            <div className="card-div"></div>
          </div>
          <div className="left-div col-sm-4">
          <div className="card-div">
              <h4 className="plans" style={{color: "#407066"}}>BUY WELL</h4>
              <h3 className="h3-con">Service Areas:</h3>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> RFX Design
              </div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Tender Management
              </div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Solution Assessment</div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Technology Selection</div><br/>
              <div className="con-rev-div"><em style={{color: "#407066"}}>➜</em> Project Bidding </div><br/>
              <div className="con-rev-div">
              <em style={{color: "#407066"}}>➜</em> Benchmarking
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planning;
