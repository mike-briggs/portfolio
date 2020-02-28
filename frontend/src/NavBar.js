import React, { Component } from 'react'

import { Search, Label, Button } from 'semantic-ui-react'
import git from './assets/images/github.png'
import mail from './assets/images/mail.png'
import linkedin from './assets/images/linkedin.png'
import Line from './components/Line.js'
import Icon from './components/Icon.js'
import menu from './assets/images/menu.png'

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
                                <div className="container">
                                    <a href="#" className="logo" style={{ color: 'black' }}>
                                        <h2 style={{ color: 'rgb(10, 10, 10)',fontFamily:'Raleway',  marginTop:'0px',fontSize: '18px', fontWeight: '600', marginTop: '0px', letterSpacing: '0' }}> Mike Briggs</h2>
                                    </a>
                                    <div style={{float:'right', paddingTop: '7px'}}>
                                    <ul style={{ display: 'flex' ,paddingTop:'5px'}} className="logoGroup">

                                        <li><Icon link="https://github.com/mike-briggs" image={git}/></li>
                                        <li><Icon link="https://www.linkedin.com/in/mike-briggs-06990a123/" image={linkedin}/></li>
                                        <li><a  style={{ cursor:'pointer',marginTop: '5px', padding: '15px', paddingRight: '0px'}} className="" ><img className="" style={{ width: 'auto', height: '35px' }} src={menu}></img></a></li>

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



