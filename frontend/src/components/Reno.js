import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import react from '../assets/images/react.png'
import ps from '../assets/images/ps.png'
import sketch from '../assets/images/sketch.png'
import { Button } from 'semantic-ui-react'
import reno from '../assets/images/Reno.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechUsed from './techused.js'
export class Reno extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="" id="">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 style={{ paddingTop:'110px',paddingLeft: '15px',paddingBottom:'15px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Renovation Mobile App</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <h4 style={{ paddingBottom:'30px',fontFamily: 'Raleway', lineHeight:'20pt', fontSize:'14px',fontWeight:'400', letterSpacing:'0.1pt' }} className="">React Native application to help streamline finding contractors for renovations and emergency jobs. Tracks materials purchased, working hours, timeline etc. Features come from two sides: to help homeowners stay on budget with reliable service and help skilled contractors find more business.</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>
                      
                      <TechUsed source1={react} source2={ps} source3={sketch}/>

                    </div>
                    <div className="col-lg-4 col-md-4 col-4" style={{ paddingBottom: '20px' }}>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-5 col-md-5">
                <img className="" style={{ paddingLeft: '0px', paddingRight: '0px', width: 'auto', height: '80vh' }} src={reno}></img>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Reno
