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
        <Header/>
        <Fiscal/>
        <Capstone/>
        <hr></hr>
        <Formal/>
        <Course/>
        <Biotech/>
        <QWEB/>
        <Safe/>
        <hr></hr>
        <Contact/>
      </div>
    );
  }

}

export default App;
