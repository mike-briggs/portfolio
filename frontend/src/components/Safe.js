import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import sketch from '../assets/images/sketch.png'
import ps from '../assets/images/ps.png'
import illustrator from '../assets/images/illustrator.png'
import { Button } from 'semantic-ui-react'
import safe from '../assets/images/safe_dentistry.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Safe extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="welcome-area vh130" id="safe">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-5 col-md-5 col-sm-12 spacingSafe">
                <h1 style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Safe Dentistry</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Raleway' }} className="">Website designed for Safe Dentistry inc. a start-up speacializing in dental office safety inspections. Helping ensure all dental offices follow proper processes and procedures. </h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>
                      <ul style={{ display: 'flex' }} className="logoGroup">
                        <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={sketch}></img></a></li>
                        <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>
                        <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={ps}></img></a></li>
                        <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>
                        <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={illustrator}></img></a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4" style={{ paddingBottom: '20px' }}>
                      <Button href="http://safedentistryinc.com" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#62cef3', color: 'white' }}>Site</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 spacingImage">
                <img style={{ paddingLeft: '20px', paddingRight: '20px', width: '100%', height: 'auto' }} src={safe}></img>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Safe
