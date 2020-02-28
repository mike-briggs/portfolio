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
              
              <div className="col-lg-7 col-md-7 col-sm-12 spacing2">
                <h1 style={{ paddingBottom:'20px',paddingTop:'100px',paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 700, textAlign: 'left' }}>Enbridge Station Field Assessment Survey Tool</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <h4 style={{ paddingBottom:'30px',fontFamily: 'Raleway', lineHeight:'20pt', fontSize:'14px',fontWeight:'400', letterSpacing:'0.1pt' }} className="">Internal Enbridge Application - Station Field Assesment Survey Tool. An application to collect information, photos and video about field asset integrity, atuomatically reporting findings to management.</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Summer 2017</h5>

                      <TechUsed source1={ps} source2={sketch} source3={js}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">

                      <a style={{ paddingBottom: '20px' }}>
                        <Button href="https://enbridge.com" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#FFB615', color: 'black' }}>Enbridge</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-12 spacingImage">
                <img sstyle={{ paddingLeft: '0px', paddingRight: '0px', width: 'auto', height: '80vh' }} src={sfast}></img>
              </div>
            </div>
          </div>

          <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-2 col-md-3"></div>
               <div className="col-lg-10 col-md-10 col-sm-12 spacing2">
                <h1 style={{ paddingBottom:'20px',paddingTop:'100px',paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 700, textAlign: 'left' }}>User Flow</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <h4 style={{ paddingBottom:'30px',fontFamily: 'Raleway', lineHeight:'20pt', fontSize:'14px',fontWeight:'400', letterSpacing:'0.1pt' }} className="">Application is used by over 40 field staff to retrieve important details of in field assets through mobile use. Information retrieved can be viewed in desktop format for management. Increased usage by 10x compared to prior application</h4>
                
                </div>
              </div>
              <div className="col-lg-3 col-md-3"></div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <img style={{ paddingLeft: '20px', paddingRight: '20px', verticalAlign: 'middle', width: '100%', height: 'auto' }} src={flowchart}></img>

              </div>
              <div className="col-lg-3 col-md-3"></div>
            </div>
          </div>
        </div>
    )
  }
}

export default SFAST
