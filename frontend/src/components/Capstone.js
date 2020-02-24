import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import drone from '../assets/images/drone.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Capstone extends Component {
  render() {
    return (

      <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="welcome-area vh140" id="sci">
        <div className="header-text">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-5 col-md-1">
                <img style={{ width: '100%', borderRadius: '20px' }} src={drone}></img>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 col-12 spacingDrone">
                <h1 style={{ paddingLeft: '15px', fontSize: '40px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>4th Year Capstone <h1 style={{ fontSize: '24px', fontFamily: 'Raleway' }}>Anti-Drone Defence System</h1></h1>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Raleway' }} className="">A system created to address the problem of recreational and malicious drone flight over airports and other areas. The system is a defence drone equipped with a camera, jetson nano, and retrieval net. After GPS coordinates of the rogue drone are given, the defence drone is able to track, hover, and remove the problem.
                  <hr></hr>
                    <ul>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Tiny YOLO v3 Object Detection</li>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Custom trained model for drones</li>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Autonomous Flight</li>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Drone coordinate tracking</li>
                    </ul>
                  </h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
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

export default Capstone
