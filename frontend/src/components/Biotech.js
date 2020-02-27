import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import wordpress from '../assets/images/wordpress.png'
import php from '../assets/images/php.png'
import js from '../assets/images/js.png'
import { Button } from 'semantic-ui-react'
import biotech from '../assets/images/btc-side.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechUsed from './techused.js'


export class Biotech extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="welcome-area vh140" id="biotech">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 spacingImage">
                <img style={{ paddingLeft: '30px', paddingRight: '30px', verticalAlign: 'middle', width: '100%', height: 'auto' }} src={biotech}></img>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 spacing2">
                <h1 style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Biotech Leadership Consulting</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Raleway' }} className="">Website created for a start-up consulting firm working with multinational pharmaceutical companies offering leadership services. Their main focus is on helping get pharmaceutical products through all levels of screening and to market. Features PGP, SSL and SFTP for patent upload.</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>

                      <TechUsed source1={wordpress} source2={php} source3={js}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">

                      <a style={{ paddingBottom: '20px' }}>
                        <Button href="https://biotechleadership.com" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#62cef3', color: 'white' }}>Site</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Biotech
