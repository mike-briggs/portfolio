import React, { Component } from 'react';
import './App.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import space from './assets/images/space_cutout.png'
import qweb from './assets/images/logo.svg'
import sketch from './assets/images/sketch.png'
import drone from './assets/images/drone.png'
import python from './assets/images/python.png'
import java from './assets/images/java.png'
import react from './assets/images/react.png'
import ps from './assets/images/ps.png'
import star from './assets/images/star.png'
import illustrator from './assets/images/illustrator.png'
import node from './assets/images/node.png'
import git from './assets/images/github.png'
import mail from './assets/images/mail.png'
import fiscalvid from './assets/images/fiscalvid.mp4'
import arrow from './assets/images/arrow.png'
import wordpress from './assets/images/wordpress.png'
import UseAnimations from "react-useanimations";
import php from './assets/images/php.png'
import js from './assets/images/js.png'
import linkedin from './assets/images/linkedin.png'
import phone from './assets/images/phone.png'
import react_white from './assets/images/react-white.png'
import ps_white from './assets/images/ps-white.png'
import sketch_white from './assets/images/sketch-white.png'
import { Button } from 'semantic-ui-react'
import biotech from './assets/images/btc-side.png'
import safe from './assets/images/safe_dentistry.svg'
import ReactTypingEffect from 'react-typing-effect'
import NavBar from './NavBar.js'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class App extends Component {
  constructor() {
    super();
    this.fiscal = React.createRef();
  }
  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2200,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="">
        <NavBar />
        <div style={{ marginTop: '0px', height: '100vh', backgroundImage: 'none' }} className="welcome-area" id="welcome">
          <div className="header-text">
            <div className="">
              <div style={{ padding: '0px' }} className="row" >
                <div className="col-lg-2 col-md-2">
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 spacingName">
                  <h1 style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600 }}><ReactTypingEffect
                    text={["Hi I'm Mike Briggs.", "Frontend Engineer", "Software Engineer"]} speed={80} typingDelay={0} //text=["Hello.", "World!"]
                  /></h1>
                  <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                    <h4 style={{ fontFamily: 'Raleway' }} className="">I'm a Software Engineer studying in my final year at Queen's University with a passion for frontend development. I'm graduating April 2020 and actively looking for full time positions. Please see my design and engineering portfolio below.</h4>
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-8">
                        <h5 style={{ paddingBottom: '0px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech I Use</h5>

                        <ul style={{ display: 'flex', paddingTop: '5px' }} className="logoGroup">
                          <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '30px', height: 'auto' }} src={react}></img></a></li>
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '80%', backgroundColor: 'lightGrey' }}></hr></a></li>
                          <li><a style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '30px', height: 'auto' }} src={java}></img></a></li>
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '80%', backgroundColor: 'lightGrey' }}></hr></a></li>
                          <li><a style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '30px', height: 'auto' }} src={python}></img></a></li>
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '80%', backgroundColor: 'lightGrey' }}></hr></a></li>
                          <li><a style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '30px', height: 'auto' }} src={sketch}></img></a></li>

                        </ul>

                      </div>
                      <div className="col-lg-4 col-md-4 col-4">
                        <a style={{ paddingBottom: '20px' }}>
                          <Button onClick={() => { this.scroll(this.fiscal) }} className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#1a73e8', color: 'white' }}>Continue</Button>
                        </a>

                      </div>
                      <div className=" col-lg-12 col-md-12">
                        <a onClick={() => { this.scroll(this.fiscal) }} style={{ padding: '15px', paddingRight: '33px', paddingTop: '10px', float: 'right' }} className="logoIconA arrow" href="#search"><img className="techIcon" style={{ paddingTop: '0px', width: '60px', height: 'auto' }} src={arrow}></img></a>

                      </div>
                    </div>

                  </div>

                </div>
                <div className="col-lg-2 col-md-2">
                </div>
              </div>

            </div>
          </div>
        </div>
        <div style={{ marginTop: '0px', opacity: '0.9' }} className="welcome-area" ref={this.fiscal} id="fiscal">
          <div className="header-text">
            <div className="">
              <div style={{ padding: '0px' }} className="row" >
                <div style={{ paddingTop: '50px', backgroundColor: 'white', borderRadius: '0px' }} className="col-lg-6 col-md-6 col-sm-12">
                  <div className="row"><div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-11 col-md-11">
                      <h1 style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Fiscal Fresh                      <h4 style={{ fontFamily: 'Raleway', fontWeight: 600, marginBottom: '0px' }} className=""><img className="techIcon" style={{ paddingTop: '10px', width: '16px', height: 'auto' }} src={star}></img>&nbsp;&nbsp;QHacks 2020 Top 3 Best Hack</h4>
</h1>
                      <hr></hr>
                      <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                        <h4 style={{ fontFamily: 'Raleway' }} className="">Web application to auto add required healthy recipe ingredients to Instacart checkout. Cuts out the middle man of meal delivery services and allows the user to do it themselves.
                        
                        </h4>
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-8">
                            <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>

                            <ul style={{ display: 'flex' }} className="logoGroup">
                              <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={react}></img></a></li>
                              <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>

                              <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={python}></img></a></li>
                              <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>
                              <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={sketch}></img></a></li>
                            </ul>
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
        </div>
        <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="welcome-area vh140" id="sci">
          <div className="header-text">
            <div className="">
              <div style={{ padding: '0px' }} className="row" >
                <div className="col-lg-5 col-md-1">
                  <img style={{ width: '100%', borderRadius: '20px' }} src={drone}></img>
                </div>
                <div  className="col-lg-7 col-md-12 col-sm-12 col-12 spacingDrone">

                  <h1 style={{ paddingLeft: '15px', fontSize: '40px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>4th Year Capstone <h1 style={{ fontSize: '24px',fontFamily: 'Raleway'}}>Anti-Drone Defence System</h1></h1>
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
        </div>
        <hr></hr>
        <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="welcome-area" id="sci">
          <div className="header-text">
            <div className="">
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
                          <ul style={{ display: 'flex' }} className="logoGroup">
                            <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '0px', width: '40px', height: 'auto' }} src={react}></img></a></li>
                            <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>

                            <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '0px', width: '40px', height: 'auto' }} src={node}></img></a></li>
                            <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>
                            <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '0px', width: '40px', height: 'auto' }} src={sketch}></img></a></li>
                          </ul>
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
                  <img style={{width: '100%', height: 'auto' }} src={space}></img>

                </div>
              </div>

            </div>
          </div>
        </div>
        <div style={{ marginTop: '0px', backgroundColor:'#fbfbfb',backgroundImage: 'none' }} className="welcome-area" id="sci">
          <div className="header-text">
            <div className="">
              <div style={{ padding: '0px' }} className="row" >
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 spacingCourse">
                  {/*} <Slider style={{height:'100%'}} {...settings}>
                    <div>
                      <img style={{height:'80vh', width:'auto'}} src={biotech}></img>
                    </div>
                    <div>
                    <img style={{height:'80vh', width:'auto'}} src={biotech}></img>
                    </div>
                    <div>
                    <img style={{height:'80vh', width:'auto'}} src={biotech}></img>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                    <div>
                      <h3>5</h3>
                    </div>
                    <div>
                      <h3>6</h3>
                    </div>
    </Slider>*/}
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
        <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="welcome-area vh140" id="biotech">
          <div className="header-text">
            <div className="">
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

                        <ul style={{ display: 'flex' }} className="logoGroup">
                          <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px', paddingRight: '15px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={wordpress}></img></a></li>
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>

                          <li><a style={{ padding: '15px', paddingTop: '10px', paddingRight: '15px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={php}></img></a></li>
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>
                          <li><a style={{ padding: '15px', paddingTop: '10px', paddingRight: '15px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={js}></img></a></li>
                        </ul>
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
        </div>
        <div style={{ marginTop: '0px' }} className="qweb-area" id="qweb">
          <div className="header-text">
            <div className="">
              <div style={{ padding: '0px' }} className="row" >


                <div className="col-lg-3 col-md-3">

                </div>
                <div style={{ paddingTop: '50px', backgroundColor: 'none' }} className="col-lg-6 col-md-6 col-sm-12">
                  <h1 style={{ textAlign: 'center', fontFamily: 'Raleway', fontWeight: 600, color: 'white' }}><ReactTypingEffect
                    text={["Queen's Web Development", "Design Executive"]} speed={200} typingDelay={200} //text=["Hello.", "World!"]
                  /></h1>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">

                    <h4 style={{ paddingLeft: '15px', textAlign: 'center', fontFamily: 'Raleway', color: 'white' }} className="">Queen's Web Development Club is a student run organization that teaches students how to build websites through tutorials, workshops and real practice.</h4>
                    <div className="row">
                      <div className="col-lg-1 col-md-1 col-1"></div>
                      <div className="col-lg-6 col-md-6 col-8">
                        <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', color: 'white', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>

                        <ul style={{ display: 'flex' }} className="logoGroup">
                          <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={react_white}></img></a></li>
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'white' }}></hr></a></li>

                          <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={ps_white}></img></a></li>
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'white' }}></hr></a></li>
                          <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={sketch_white}></img></a></li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 col-2">

                        <a style={{ marginBottom: '20px' }}>
                          <Button href="https://github.com/mike-briggs/qweb" className="main-button-slider" style={{ marginBottom: '10px', float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#107179', color: 'white' }}>Repo</Button>
                        </a>
                        <a style={{ paddingBottom: '20px' }}>
                          <Button href="https://qweb.dev" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#144d5a', color: 'white' }}>Site</Button>
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
        </div>

        <div style={{ marginTop: '0px', backgroundImage: 'none' }} className="welcome-area vh120" id="safe">
          <div className="header-text">
            <div className="">
              <div style={{ padding: '0px' }} className="row" >

                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5 col-sm-12 spacingSafe">
                  <h1 style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Safe Dentistry</h1>
                  <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                    <h4 style={{ fontFamily: 'Raleway' }} className="">Website designed for Safe Dentistry inc. a start-up speacializing in dental office safety inspections. Helping ensure all dental offices follow proper processes and procedures. </h4>
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-8">
                        <h5 style={{ paddingBottom: '20px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left' }}>Tech Used</h5>

                        <ul style={{ display: 'flex' }} className="logoGroup">
                          <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={sketch}></img></a></li>
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>

                          <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={ps}></img></a></li>
                          <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>

                          <li><a style={{ padding: '15px', paddingTop: '10px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={illustrator}></img></a></li>

                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 col-4" style={{ paddingBottom: '20px' }}>

                        
                          <Button href="http://safedentistryinc.com" className="main-button-slider" style={{ float: 'right', fontFamily: 'Raleway', fontWeight: 600, backgroundColor: '#62cef3', color: 'white' }}>Site</Button>
                        
                      </div>

                    </div>

                  </div>

                </div>

                <div className="col-lg-6 col-md-6 spacingImage">
                  <img style={{ paddingLeft: '20px', paddingRight: '20px', width: '100%', height: 'auto' }} src={safe}></img>
                </div>
              </div>

            </div>
          </div>
        </div>
        <hr></hr>

        <div style={{ marginTop: '0px', backgroundImage: 'none', height: '80vh' }} className="welcome-area" id="contact">
          <div className="header-text">
            <div className="">
              <div style={{ padding: '0px' }} className="row" >
                <div className="col-lg-2 col-md-2">
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 spacing2">
                  <h1 style={{ paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: 600 }}>Contact Me</h1>
                  <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                    <h4 style={{ fontFamily: 'Raleway' }} className="">Feel free to reach out to me below, I would love to have a chat.</h4>
                    <hr></hr>
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-8">
                        <ul style={{ display: 'flex' }} className="logoGroup">
                          <li><a href="https://github.com/mike-briggs" style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className=" techIcon" ><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={git}></img></a></li>
                          <li><a href="https://www.linkedin.com/in/mike-briggs-06990a123/" style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className=" techIcon" ><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={linkedin}></img></a></li>
                          <li><a href="mailto:michael.briggs@queensu.ca" style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className=" techIcon" ><img className="techIcon" style={{ paddingTop: '15px', width: '30px', height: 'auto' }} src={mail}></img></a></li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 col-4">
                        <h4 style={{ fontFamily: 'Raleway', padding: '5px', fontSize: '12px' }} className="">Copyright &copy;  Mike Briggs.</h4>

                      </div>
                    </div>

                  </div>

                </div>
                <div className="col-lg-2 col-md-2">

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
