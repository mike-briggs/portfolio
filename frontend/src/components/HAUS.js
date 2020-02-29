import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import java from '../assets/images/java.png'
import ps from '../assets/images/ps.png'
import android from '../assets/images/android.png'
import { Button } from 'semantic-ui-react'
import haus from '../assets/images/HAUS.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechUsed from './techused.js'
export class HAUS extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="" id="">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 style={{ paddingTop:'110px',paddingBottom:'15px',paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Rental Property Search</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <h4 style={{ paddingBottom:'30px',fontFamily: 'Raleway', lineHeight:'20pt', fontSize:'14px',fontWeight:'400', letterSpacing:'0.1pt' }} className="">Tinder for Renting Houses! Swipe to find the ideal rental property for you and your housemates. First year Capstone project developed in Android Studio as an oppourtunity to develop a business alongside the software to make it work.</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Year '16-17</h5>
                      
                      <TechUsed source1={java} source2={ps} source3={android}/>

                    </div>
                    <div className="col-lg-4 col-md-4 col-4" style={{ paddingBottom: '20px' }}>
                      <Button href="http://github.com/mike-briggs" target="_blank" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#813cc7', color: 'white' }}>Repo</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-5 col-md-5">
                <img className="" style={{ paddingLeft: '0px', paddingRight: '0px', width: 'auto', height: '80vh' }} src={haus}></img>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default HAUS
