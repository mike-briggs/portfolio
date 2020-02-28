import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import java from '../assets/images/java.png'
import ps from '../assets/images/ps.png'
import android from '../assets/images/android.png'
import { Button } from 'semantic-ui-react'
import pm from '../assets/images/PM_Dashboard.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechUsed from './techused.js'
export class PM extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="" id="safe">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 style={{ paddingTop:'110px',paddingBottom:'15px',paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Enbridge Project Dashboard</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <h4 style={{ paddingBottom:'30px',fontFamily: 'Raleway', lineHeight:'20pt', fontSize:'14px',fontWeight:'400', letterSpacing:'0.1pt' }} className="">Internal Enbridge Application - Engineering Dept. Project Management Tool to allow PMs to submit status updates and display them on a compiled dashboard.</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>
                      
                      <TechUsed source1={java} source2={ps} source3={android}/>

                    </div>
                    <div className="col-lg-4 col-md-4 col-4" style={{ paddingBottom: '20px' }}>
                      <Button href="http://safedentistryinc.com" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#FFB615', color: 'white' }}>Site</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-5 col-md-5">
                <img className="" style={{ paddingTop:'150px', paddingRight: '0px', height: 'auto', width: '100%' }} src={pm}></img>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default PM
