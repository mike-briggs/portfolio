import React, { Component } from 'react';
import './components/App.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import NavBar from './NavBar.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fiscal from './components/Fiscal.js'
import Biotech from './components/Biotech.js'
import Capstone from './components/Capstone.js'
import Contact from './components/Contact.js'
import Course from './components/Course.js'
import Header from './components/Header.js'
import QWEB from './components/QWEB.js'
import Safe from './components/Safe.js'
import Formal from './components/Formal.js'
import ProjectCard from './components/OtherProjects.js'



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
        <Header scroll={this.fiscal}/>
        <Fiscal  ref={this.fiscal} id="fiscal"/>
        <Capstone/>
        
        <Formal/>
        <QWEB/>
        <Contact />
        <ProjectCard/>
        <hr style={{padding:'20px',paddingAbove:'40px'}}></hr>
        <div >
        <div className="col-lg-12 col-md-12 col-12">
                      <h4 style={{ fontFamily: 'Cabin', paddingBottom:'20px',fontSize: '16px',float:'right' }} className="">Copyright &copy;  Mike Briggs.</h4>
                    </div>
        </div>
        
      </div>
    );
  }

}

export default App;
