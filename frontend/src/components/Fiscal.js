import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import sketch from '../assets/images/sketch.png'
import python from '../assets/images/python.png'
import react from '../assets/images/react.png'
import star from '../assets/images/star.png'
import fiscalvid from '../assets/images/fiscalvid.mp4'
import { Button } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechUsed from './techused.js'

export class Fiscal extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', opacity: '0.9' }} className="welcome-area" ref={this.props.fiscal} id="fiscal">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div style={{ paddingTop: '50px', backgroundColor: 'white', borderRadius: '0px' }} className="col-lg-6 col-md-6 col-sm-12">
                <div className="row"><div className="col-lg-1 col-md-1"></div>
                  <div className="col-lg-11 col-md-11">
                    <h1 style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Fiscal Fresh                      <h4 style={{ fontFamily: 'Raleway', fontWeight: 600, marginBottom: '0px' }} className=""><img className="techIcon" style={{ paddingTop: '10px', width: '16px', height: 'auto' }} src={star}></img>&nbsp;&nbsp;QHacks 2020 Top 3 Best Hack</h4></h1>
                    <hr></hr>
                    <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                      <h4 style={{ fontFamily: 'Raleway' }} className="">Web application to auto add required healthy recipe ingredients to Instacart checkout. Cuts out the middle man of meal delivery services and allows the user to do it themselves.</h4>
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-8">
                          <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>
                          
                          <TechUsed source1={react} source2={python} source3={sketch}/>

                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <a style={{ marginBottom: '20px' }}>
                            <Button href="https://github.com/mike-briggs/FiscalFresh" className="main-button-slider" style={{ marginBottom: '10px', float: 'right', fontFamily: 'Raleway', fontWeight: 600, color: 'white', backgroundColor: 'rgb(40, 40, 40)' }}>Repo</Button>
                          </a>
                          <a style={{ paddingBottom: '20px' }}>
                            <Button href="http://www.fiscalfresh.ca" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: 'rgb(91, 206, 56)', color: 'white' }}>Site</Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div></div>
              </div>
              <div style={{ padding: '20px', width: '100%', backgroundColor: 'white', borderRadius: '0px' }} className="col-lg-6 col-md-6">
                <ReactPlayer url={fiscalvid} style={{ width: '100%', height: 'auto' }} width={'100%'} height={'auto'} playing loop playsinline />
              </div>
            </div>
          </div>
        </div>
      
    )
  }
}

export default Fiscal
