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
      hovering: false
    };
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    const style = {
      cursor: this.state.hovering ? 'pointer' : undefined,transitionDuration: '0.6s',
      margin: '10px', borderWeight: '10px', boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.04)',backgroundColor:this.state.hovering ? this.props.color : 'white',borderRadius:this.state.hovering ? '8px' : '0px'

    };
    const hide = {
      color: this.state.hovering ? 'white' : 'black', transitionDuration: '0.2s',
      paddingTop: '30px', paddingLeft: '15px', fontColor: { color }, fontSize: '18pt', fontFamily: 'Cabin', fontWeight: 700, textAlign: 'left'

    }
    const hide2 = {
      color: this.state.hovering ? 'white' : 'black',transitionDuration: '0.6s',letterSpacing:'0.1pt',lineHeight:'20pt', paddingTop: '5px', fontFamily: 'Cabin', fontSize: '12pt', textAlign: 'left',fontWeight:this.state.hovering ? '400' : '400'
    }
    const hide3 = {
      opacity: this.state.hovering ? '3%':'90%' , transitionDuration: '0.7s', float: 'left',zIndex:-99
    }
    const show = {
      opacity: this.state.hovering ? '100%' : '0%', transitionDuration: '0.4s', marginTop: '-50px', paddingBottom: '20px', fontFamily: 'Cabin', zIndex:99,fontWeight: '700', fontSize: '16pt',color:'#fff',
      float: 'right'
    }


    const handleMouseEnter = () => this.setState({ hovering: true });
    const handleMouseLeave = () => this.setState({ hovering: false });
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
      <div onClick={this.props.onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style} className="col-lg-4 col-md-12 col-sm-12 col-12">
        <Button style={{ float: 'right', borderRadius:'100%',marginTop:'20px',padding:'12px',backgroundColor:'white',transitionDuration:'0.5s',fontSize:'16pt', color:this.props.color}}
          onClick={this.close4} icon 
        ><Icon name={this.props.iconName} />

        </Button>
        <h1 style={hide}>{this.props.title}</h1>

        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <p style={hide2} className="">{this.props.desc}</p>
          
          <div className="row">
            <div className="col-lg-8 col-md-8 col-8">
              <div style={hide3}>
                <ul style={{ display: 'flex'}} className="logoGroup">
                  <li><p style={hide2,{fontSize:'12pt',fontWeight:'700',paddingTop:'4px'}} className="">{this.props.year}</p></li>
                  <li><IconC link="" image={this.props.icon1} style={{ paddingLeft: '0px' }} /></li>
                  <li><IconC link="" image={this.props.icon2} /></li>
                  <li><IconC link="" image={this.props.icon3} /></li>
                </ul>
              </div>
            </div>

          </div>
          <h4 style={{ float: 'right',fontColor:'white' }} onClick={this.props.onClick} style={show}>View Project<Button style={{ float: 'right', marginRight:'-8px',marginLeft:'10px',padding:'7px',backgroundColor:'white',transitionDuration:'0.5s',fontSize:'12pt', color:this.props.color}}
          onClick={this.close4} icon circular
        ><Icon name={this.props.arrow} />

        </Button></h4>
        </div>



      </div>




    )
  }
}

export default ProjectCard
