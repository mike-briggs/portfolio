import React, { Component } from 'react'

import { Search, Label, Button } from 'semantic-ui-react'
import git from './assets/images/github.png'
import mail from './assets/images/mail.png'
import linkedin from './assets/images/linkedin.png'
import Line from './components/Line.js'
import IconC from './components/Icon.js'
import menu from './assets/images/menu.png'
import {Icon} from 'semantic-ui-react'

export class NavBar extends Component {
    state = {
        animation: 'overlay',
        direction: 'right',
        dimmed: true,
        visible: false,
    }

    constructor(props) {
        super(props);
        this.childLook = React.createRef();
        this.state = {
            isLoading: false,
            signButton: <></>,
            value: ''
        }
    }

    render() {

        return (

            <div>
                <header className="header-area header-sticky">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <div className="">
                                    <a href="#" className="logo" style={{paddingLeft:'30px', color: 'black' }}>
                                        <h2 style={{ color: 'rgb(10, 10, 10)',fontFamily:'Cabin',  marginTop:'0px',fontSize: '18px', fontWeight: '600', marginTop: '0px', letterSpacing: '0' }}> Mike Briggs</h2>
                                    </a>
                                    <div style={{float:'right', paddingTop: '7px',paddingRight:'30px', }}>
                                    <ul style={{ display: 'flex' ,paddingTop:'5px'}} className="logoGroup">
                                        <li><a href="#projects"><Icon size={20} style={{paddingTop:'2px',fontSize:'12pt'}} name="th"/></a></li>
                                        <li><IconC link="https://github.com/mike-briggs" target="_blank" image={git}/></li>
                                        <li><IconC link="https://www.linkedin.com/in/mike-briggs-06990a123/" target="_blank" image={linkedin}/></li>

                                    </ul>
                                    </div>
                                    
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default NavBar



