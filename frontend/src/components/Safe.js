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
import TechUsed from './techused.js'
export class Safe extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="welcome-area" id="safe">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <h1 style={{ paddingLeft: '15px', fontFamily: 'Cabin', fontWeight: 600, textAlign: 'left' }}>Safe Dentistry</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Cabin' }} className="">Website designed for Safe Dentistry inc. a start-up speacializing in dental office safety inspections. Helping ensure all dental offices follow proper processes and procedures. </h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Cabin', fontWeight: 600, textAlign: 'left' }}>June 2019</h5>
                      
                      <TechUsed source1={sketch} source2={ps} source3={illustrator}/>

                    </div>
                    <div className="col-lg-4 col-md-4 col-4" style={{ paddingBottom: '20px' }}>
                      <Button href="http://safedentistryinc.com" target="_blank" className="main-button-slider" style={{ float: 'right', fontFamily: 'Cabin', fontWeight: 600, backgroundColor: '#62cef3', color: 'white' }}>Site</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <img style={{ paddingLeft: '20px', paddingRight: '20px', width: '100%', height: 'auto' }} src={safe}></img>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Safe
