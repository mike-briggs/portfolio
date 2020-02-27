import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import git from '../assets/images/github.png'
import mail from '../assets/images/mail.png'
import linkedin from '../assets/images/linkedin.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Contact extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none', height: '80vh' }} className="welcome-area" id="contact">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-2 col-md-2">
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 spacing2">
                <h1 style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600 }}>Contact Me</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Raleway' }} className="">Feel free to reach out to me below, I would love to have a chat.</h4>
                  <hr></hr>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <ul style={{ display: 'flex' }} className="logoGroup">
                        <li><a href="https://github.com/mike-briggs" style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className=" techIcon" ><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={git}></img></a></li>
                        <li><a href="https://www.linkedin.com/in/mike-briggs-06990a123/" style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className=" techIcon" ><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={linkedin}></img></a></li>
                        <li><a href="mailto:michael.briggs@queensu.ca" style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className=" techIcon" ><img className="techIcon" style={{ paddingTop: '15px', width: '30px', height: 'auto' }} src={mail}></img></a></li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Contact
