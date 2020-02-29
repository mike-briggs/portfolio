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
export class Popup extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="" id="">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 style={{ paddingTop:'110px',paddingBottom:'15px',paddingLeft: '15px', fontFamily: 'Cabin', fontWeight: 600, textAlign: 'left' }}>{this.props.title}</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <h4 style={{ paddingBottom:'30px',fontFamily: 'Cabin', lineHeight:'20pt', fontSize:'14px',fontWeight:'400', letterSpacing:'0.1pt' }} className="">{this.props.desc}</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Cabin', fontWeight: 600, textAlign: 'left' }}>{this.props.year}</h5>
                      
                      <TechUsed source1={this.props.icon1} source2={this.props.icon2} source3={this.props.icon3}/>

                    </div>
                    <div className="col-lg-4 col-md-4 col-4" style={{ paddingBottom: '20px' }}>
                      <Button href="http://github.com/mike-briggs" target="_blank" className="main-button-slider" style={{ float: 'right', fontFamily: 'Cabin', fontWeight: 600, backgroundColor: this.props.color, color: 'white' }}>Repo</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-5 col-md-5">
                <img className="" style={{ paddingLeft: '0px', paddingRight: '0px', width: 'auto', height: '80vh' }} src={this.props.image}></img>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Popup
