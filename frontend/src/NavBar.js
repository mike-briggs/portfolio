import React, { Component } from 'react'

import { Search, Label, Button } from 'semantic-ui-react'
import git from './assets/images/github.png'
import mail from './assets/images/mail.png'
import linkedin from './assets/images/linkedin.png'


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
                                        <h2 style={{ color: 'rgb(10, 10, 10)',fontFamily:'Raleway',  marginTop:'0px',fontSize: '24px', fontWeight: '600', marginTop: '0px', letterSpacing: '0' }}> Mike Briggs</h2>
                                    </a>
                                    <div style={{float:'right', paddingTop: '7px'}}>
                                    <ul style={{ display: 'flex' }} className="logoGroup">
                                        <li><a href="https://github.com/mike-briggs" style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px' }} className=" techIcon" ><img className="techIcon" style={{ paddingTop: '5px', width: '40px', height: 'auto' }} src={git}></img></a></li>
                                        <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>
                                        <li><a href="https://www.linkedin.com/in/mike-briggs-06990a123/" style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className=" techIcon" ><img className="techIcon" style={{ paddingTop: '5px', width: '40px', height: 'auto' }} src={linkedin}></img></a></li>
                                        <li><a style={{ padding: '0px', paddingTop: '0px' }} className=""><hr style={{ width: '1px', marginTop: '1px', height: '100%', backgroundColor: 'lightGrey' }}></hr></a></li>
                                        <li><a href="mailto:michael.briggs@queensu.ca" style={{ padding: '15px', paddingLeft: '15px', paddingTop: '10px' }} className=" techIcon" ><img className="techIcon" style={{ paddingTop: '10px', width: '30px', height: 'auto' }} src={mail}></img></a></li>

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



