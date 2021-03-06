import React, { Component } from 'react'
import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import react_white from '../assets/images/react-white.png'
import ps_white from '../assets/images/ps-white.png'
import sketch_white from '../assets/images/sketch-white.png'
import { Button } from 'semantic-ui-react'
import ReactTypingEffect from 'react-typing-effect'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechUsed from './techused.js'

export class QWEB extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px' }} className="qweb-area" id="qweb">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-3 col-md-3">
              </div>
              <div style={{ paddingTop: '50px', backgroundColor: 'none' }} className="col-lg-6 col-md-6 col-sm-12">
                <h1 style={{ textAlign: 'center', fontFamily: 'Cabin', fontWeight: 600, color: 'white' }}><ReactTypingEffect
                  text={["Queen's Web Development", "Design Executive"]} speed={200} typingDelay={200} //text=["Hello.", "World!"]
                /></h1>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <h4 style={{ paddingLeft: '15px', textAlign: 'center', fontFamily: 'Cabin', color: 'white',fontSize:'1em' }} className="">Queen's Web Development Club is a student run organization that teaches students how to build websites through tutorials, workshops and real practice.</h4>
                  <div className="row">
                    <div className="col-lg-1 col-md-1 col-1"></div>
                    <div className="col-lg-6 col-md-6 col-8">
                      <h5 style={{ paddingBottom: '5px', fontFamily: 'Cabin', color: 'white', fontWeight: 600, textAlign: 'left' }}>Jan 2018 - Present</h5>
                      <ul style={{ display: 'flex' }} className="logoGroup">
                        <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={react_white}></img></a></li>
                        <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={ps_white}></img></a></li>
                        <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={sketch_white}></img></a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-2">
                      <a style={{ marginBottom: '20px' }}>
                        <Button href="https://github.com/mike-briggs/qweb" target="_blank" className="main-button-slider" style={{ marginBottom: '10px', float: 'right', fontFamily: 'Cabin', fontWeight: 600, backgroundColor: '#107179', color: 'white' }}>Repo</Button>
                      </a>
                      <a style={{ paddingBottom: '20px' }}>
                        <Button href="https://qweb.dev" className="main-button-slider" target="_blank" style={{ float: 'right', fontFamily: 'Cabin', fontWeight: 600, backgroundColor: '#144d5a', color: 'white' }}>Site</Button>
                      </a>
                    </div>
                    <div className="col-lg-1 col-md-1 col-1"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default QWEB
