import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'

import sketch from '../assets/images/sketch.png'
import python from '../assets/images/python.png'
import java from '../assets/images/java.png'
import react from '../assets/images/react.png'

import arrow from '../assets/images/arrow.png'

import { Button } from 'semantic-ui-react'

import ReactTypingEffect from 'react-typing-effect'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Header extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', height: '100vh', backgroundImage: 'none' }} className="welcome-area" id="welcome">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-2 col-md-2">
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 spacingName">
                <h1 style={{ paddingLeft: '15px', fontFamily: 'Cabin', fontWeight: 600 }}><ReactTypingEffect
                  text={["Hi I'm Mike Briggs.", "Frontend Engineer", "Software Engineer"]} speed={80} typingDelay={0} //text=["Hello.", "World!"]
                /></h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Cabin' }} className="">I'm a Software Engineer studying in my final year at Queen's University with a passion for frontend development. I'm graduating April 2020 and actively looking for full time positions. Please see my design and engineering portfolio below.</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '0px', fontFamily: 'Cabin', fontWeight: 600, textAlign: 'left' }}>Tech I Use</h5>
                      <ul style={{ display: 'flex', paddingTop: '5px' }} className="logoGroup">
                        <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '30px', height: 'auto' }} src={react}></img></a></li>
                        <li><a style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '30px', height: 'auto' }} src={java}></img></a></li>
                        <li><a style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '30px', height: 'auto' }} src={python}></img></a></li>
                        <li><a style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '30px', height: 'auto' }} src={sketch}></img></a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      {/*<a style={{ paddingBottom: '20px' }}>
                        <Button onClick={() => { this.scroll("#fiscal") }} className="main-button-slider" style={{ float: 'right', fontFamily: 'Cabin', fontWeight: 600, backgroundColor: '#1a73e8', color: 'white' }}>Continue</Button>
                      </a>*/}
                    </div>
                    <div className=" col-lg-12 col-md-12">
                      <a onClick={() => { this.scroll("#fiscal") }} style={{ padding: '15px', paddingRight: '33px', paddingTop: '10px', float: 'right' }} className="logoIconA arrow" href="#search"><img className="techIcon" style={{ paddingTop: '0px', width: '60px', height: 'auto' }} src={arrow}></img></a>
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

export default Header
