import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import ps from '../assets/images/ps.png'
import sketch from '../assets/images/sketch.png'
import js from '../assets/images/js.png'
import { Button } from 'semantic-ui-react'
import sfast from '../assets/images/SFAST.png'
import flowchart from '../assets/images/Flowchart.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechUsed from './techused.js'


export class SFAST extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="" id="">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-5 col-md-5 col-sm-12 col-12 spacingImage">
                <img style={{ paddingLeft: '30px', paddingRight: '30px', verticalAlign: 'middle', width: 'auto', height: '100%' }} src={sfast}></img>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 spacing2">
                <h1 style={{ paddingBottom:'20px',paddingTop:'100px',paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 700, textAlign: 'left' }}>Enbridge Station Field Assessment Survey Tool</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Raleway',fontSize:'14px',paddingBottom:'30px',letterSpacing:'0px' }} className="">Internal Enbridge Application - Station Field Assesment Survey Tool. An application to collect information about field asset integrity and report findings to management.</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>

                      <TechUsed source1={ps} source2={sketch} source3={js}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">

                      <a style={{ paddingBottom: '20px' }}>
                        <Button href="https://biotechleadership.com" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#FFB615', color: 'black' }}>Enbridge</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-2 col-md-3"></div>
               <div className="col-lg-10 col-md-10 col-sm-12 spacing2">
                <h1 style={{ paddingBottom:'20px',paddingTop:'100px',paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 700, textAlign: 'left' }}>User Flow</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Raleway',fontSize:'14px',paddingBottom:'30px',letterSpacing:'0px' }} className="">The application retrieves important details starting from mobile use in the field to desktop inspections.</h4>
                
                </div>
              </div>
              <div className="col-lg-2 col-md-2"></div>
              <div className="col-lg-8 col-md-8">
              <img style={{ paddingLeft: '80px', paddingRight: '80px', verticalAlign: 'middle', width: '100%', height: 'auto' }} src={flowchart}></img>

              </div>
              <div className="col-lg-2 col-md-2"></div>
            </div>
          </div>
        </div>
    )
  }
}

export default SFAST
