import React, { Component } from 'react'
import './App.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import python from '../assets/images/python.png'
import js from '../assets/images/js.png'
import ps from '../assets/images/ps.png'
import sketch from '../assets/images/sketch.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconC from './Icon.js'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export class ProjectCard extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
             hovering : false
        };
    }
    
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {
        const style = {
            cursor: this.state.hovering ? 'pointer' : undefined,
            margin:'10px',boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.04)'
            
        };
        const hide = {
            opacity:this.state.hovering ? '5%' : '100%',transitionDuration: '0.3s',
            paddingTop:'30px', paddingLeft: '15px', fontColor:{color}, fontSize: '24px', fontFamily: 'Raleway', fontWeight: 600, textAlign: 'left'

        }
        const hide2 = {
            opacity:this.state.hovering ? '5%' : '100%',transitionDuration: '0.3s',paddingTop:'20px',fontFamily: 'Raleway',fontSize:'14px' 
        }
        const hide3 = {
            opacity:this.state.hovering ? '5%' : '100%',transitionDuration: '0.3s',  float: 'left' 
        }
        const show = {
            opacity:this.state.hovering ? '100%' : '0%', transitionDuration: '0.3s', marginTop:'-50px',paddingBottom:'20px', fontWeight:'700',fontSize:'24px',
            color:'#000'
        }
        

        const handleMouseEnter = () => this.setState({hovering : true});
        const handleMouseLeave = () => this.setState({hovering : false});
        var color;
        if (this.state.hover) {
            color = "#fff"
          } else {
            color = "#000"
          }
          /*                <h1 style={show, {color:'#fff'}}>Go To Project  ></h1>
*/
          /*style={{margin:'10px',boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.04)'}} */ 
        return (
              <div onClick={this.props.onClick}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style} className="col-lg-4 col-md-4 col-sm-12 col-12">
                  
                <h1 style={hide}>{this.props.title}</h1>

                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <p style={hide2} className="">{this.props.desc}
                    <hr></hr>
                  </p>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-8">
                      <div style={hide3}>
                        <ul style={{ display: 'flex' }} className="logoGroup">
                          <li><IconC link="" image={this.props.icon1} style={{paddingLeft:'0px'}}/></li>
                          <li><IconC link="" image={this.props.icon2}/></li>
                          <li><IconC link="" image={this.props.icon3}/></li>
                        </ul>
                      </div>
                    </div>
                
                  </div>
                </div>
                <h4 onClick={this.props.onClick} style={show}>View Project  ></h4>

                
              </div>
          
        )
    }
}

export default ProjectCard
