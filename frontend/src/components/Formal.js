import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import space from '../assets/images/space_cutout.png'
import sketch from '../assets/images/sketch.png'
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import { Button } from 'semantic-ui-react'
import TechUsed from './techused.js'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Formal extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="welcome-area" id="sci">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 spacingSci">
                <h1 style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Queen's Engineering Formal</h1>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Raleway' }} className="">Sci Formal is a celebration for all of Queen's Engineering held annually. This mern web application keeps track of 400+ simultaneous volunteers putting together the space themed formal. Features User, Manager, &amp; Admin sign-in with different access levels. Managers can start the hour logging process while admins are able to add or remove hours from specific students. Users can sign in and view how many hours they have left.</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>
                      <div style={{ float: 'left' }}>
                        
                        <TechUsed source1={react} source2={node} source3={sketch}/>

                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <a style={{ marginBottom: '20px' }}>
                        <Button href="https://github.com/mike-briggs/Space-HourLogger" className="main-button-slider" style={{ marginBottom: '10px', float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#f16b2b', color: 'white' }}>Repo </Button>
                      </a>
                      <a style={{ paddingBottom: '20px' }}>
                        <Button href="https://app.scienceformal.ca" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#2f1667', color: 'white' }}>Site</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <img style={{ width: '100%', height: 'auto' }} src={space}></img>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Formal
