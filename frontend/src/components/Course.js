import React, { Component } from 'react'

import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import python from '../assets/images/python.png'
import java from '../assets/images/java.png'
import { Button } from 'semantic-ui-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Course extends Component {
  render() {
    return (
      <div style={{ marginTop: '0px', backgroundColor: '#fbfbfb', backgroundImage: 'none' }} className="welcome-area" id="sci">
        <div className="header-text">
          <div className="">
            <div style={{ padding: '0px' }} className="row" >
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12 spacingCourse">
                <h1 style={{ paddingLeft: '15px', fontSize: '24px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Algorithm Implementations</h1>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Raleway' }} className="">Various algorithm program implementations in Java to solve real world problems at a small scale.
                    <hr></hr>
                    <ul>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Travel Planning (Djikstra)</li>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Subset with Target Sum</li>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Huffman Coding</li>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> File Differences (LCS)</li>
                    </ul>
                  </h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <div style={{ float: 'left' }}>
                        <ul style={{ display: 'flex' }} className="logoGroup">

                          <li><a style={{ padding: '0px', paddingLeft: '0px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '0px', width: '60px', height: 'auto' }} src={java}></img></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <a style={{ marginBottom: '20px' }}>
                        <Button href="https://github.com/mike-briggs/Algorithms" className="main-button-slider" style={{ marginBottom: '10px', float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#3c1069', color: 'white' }}>Github</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2"><hr className="hideDesktop"></hr></div>
              <div className="col-lg-4 col-md-12 col-sm-12 spacingCourse">
                <h1 style={{ paddingLeft: '15px', fontSize: '24px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Quality Assurance Project</h1>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <h4 style={{ fontFamily: 'Raleway' }} className=""> Simple banking system in python to practice Quality Assurance methods in a simulated environment.
                    <hr></hr>
                    <ul>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Common Testing Techniques with pytest</li>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Software Dev Lifecycle Procedures</li>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Agile Development </li>
                      <li><a style={{ fontSize: '22px', fontWeight: '700', paddingRight: '10px' }}>></a> Collaborative Environment</li>
                    </ul>
                  </h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <div style={{ float: 'left' }}>
                        <ul style={{ display: 'flex' }} className="logoGroup">
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '0px', width: '60px', height: 'auto' }} src={python}></img></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <a style={{ paddingBottom: '20px' }}>
                        <Button href="https://github.com/mike-briggs/QualityAssurance" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#3c1069', color: 'white' }}>Github</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Course
