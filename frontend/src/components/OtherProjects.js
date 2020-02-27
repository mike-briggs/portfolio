import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Project from './ProjectCard.js'
import python from '../assets/images/python.png'
import js from '../assets/images/js.png'
import ps from '../assets/images/ps.png'
import sketch from '../assets/images/sketch.png'
import node from '../assets/images/node.png'
import php from '../assets/images/php.png'
import java from '../assets/images/java.png'
import react from '../assets/images/react.png'
import './App.css'
import Course from './Course.js'
import Biotech from './Biotech.js'
import Safe from './Safe.js'
import SFAST from './SFAST.js'

import { Button, Header, Icon, Modal, Dropdown,Sticky } from 'semantic-ui-react'


export class OtherProjects extends Component {
    state = { open: false, open2: false, open3: false,open4:false }

    close = () => this.setState({ open: false })
    open = () => this.setState({ open: true })
    close2 = () => this.setState({ open2: false })
    open2 = () => this.setState({ open2: true })
    close3 = () => this.setState({ open3: false })
    open3 = () => this.setState({ open3: true })
    close4 = () => this.setState({ open4: false })
    open4 = () => this.setState({ open4: true })




    render() {
        const { open, open2, open3,open4 ,value } = this.state
        const dropdown = [
            {
                key: 'Code',
                text: 'Code',
                value: 'Code'
            },
            {
                key: 'Design',
                text: 'Design',
                value: 'Design'
            }
        ]
        return (
            <div className="container">
                <div className="col-md-12">
                    <Modal open={open} onClose={this.close} style={{ width: '100%', padding: '30px' }} >
                        <Button style={{ float: 'right' }}
                            onClick={this.close} icon
                        ><Icon name='x' />

                        </Button>
                        <Course />
                    </Modal>
                    <Modal open={open2} onClose={this.close2} style={{ width: '100%', padding: '30px' }} >
                        <Button style={{ float: 'right' }}
                            onClick={this.close2} icon
                        ><Icon name='x' />

                        </Button>
                        <Safe />
                    </Modal>
                    <Modal open={open3} onClose={this.close3} style={{ width: '100%', padding: '30px' }} >
                        <Button style={{ float: 'right' }}
                            onClick={this.close3} icon
                        ><Icon name='x' />

                        </Button>
                        <Biotech />
                    </Modal>
                    <Modal open={open4} onClose={this.close4} style={{ width: '100%', padding: '30px' }} >
                        <Modal.Content scrolling style={{maxHeight:'100%'}}>
                        <Button style={{ float: 'right' }}
                            onClick={this.close4} icon
                        ><Icon name='x' />

                        </Button>
                        <SFAST />
                        </Modal.Content>
                    </Modal>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                        <h1 style={{ paddingBottom: '30px', fontFamily: 'Raleway', fontWeight: 600 }}>Other Projects</h1>

                    </div>
                    <div className="col-lg-2 col-md-2">
                    <Dropdown style={{ float: 'right' }}
                        placeholder='Code'
                        fluid
                        selection
                        options={dropdown}
                    />
                    </div>
                    <hr></hr>
                </div>             
                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>
                    <Project year="2019" onClick={this.open3} className="" title="Biotech Leadership" icon1={js} icon2={php} icon3={ps} desc="Internal Enbridge Application - Station Field Assesment Survey Tool. An application to collect field asset integrity and report findings to management." />
                    <Project year="2019" onClick={this.open2} title="SAFE Dentistry" icon1={sketch} icon2={ps} icon3={js} desc="Website designed for Safe Dentistry inc. a start-up speacializing in dental office safety inspections ensuring proper processes and procedures." />
                    <div className="col-lg-2 col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>
                    <Project year="2019" onClick={this.open} title="Course Projects" icon1={java} icon2={python} icon3="" desc="Various algorithm program implementations in Java and Quality Assurance in Python to solve real world problems at a small scale." />
                    <Project year="2018" title="Landlord-Tenant App" icon1={react} icon2={ps} icon3={sketch} desc="C++ application to help tenants effectively communicate with their Landlords through messaging, maintenance requests, and rent payments. " />
                    <div className="col-lg-2 col-md-2"></div>
                </div>

                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>
                    <Project year="2017" onClick={this.open4} title="Enbridge SFAST" icon1={js} icon2={ps} icon3="" desc="Internal Enbridge Application - Station Field Assesment Survey Tool. An application to collect field asset integrity and report findings to management." />
                    <Project year="2018" title="Enbridge PM Tool" icon1={js} icon2={ps} icon3="" desc="Internal Enbridge Application - Engineering Dept. Project Management Tool to allow PMs to submit status updates and display them on a compiled dashboard." />
                    <div className="col-lg-2 col-md-2"></div>
                </div>

                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>
                    <Project year="2017" title="HAUS Mobile App" icon1={sketch} icon2={java} icon3="" desc="Tinder for Renting Houses! First year Capstone project developed in Android Studio. Oppourtunity to develop a business alongside the software to make it work." />
                    <Project year="2019" title="Reno Mobile App" icon1={react} icon2={sketch} icon3="" desc="React Native application to help streamline finding contractors for renovations and emergency jobs. Tracks materials purchased, hours, etc. helping homeowners." />
                    <div className="col-lg-2 col-md-2"></div>
                </div>



            </div>
        )
    }
}

export default OtherProjects
