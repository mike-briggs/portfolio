import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
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
import sayblue from '../assets/images/sayblue.jpg'
import ProjectImage from './ImageCard.js'

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
    closeSoon = () => this.setState({ openSoon: false })
    openSoon = () => this.setState({ openSoon: true })



    render() {
        const { open, open2, open3,open4 ,value,openSoon } = this.state
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
            <div className="container" >
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <Modal open={open} onClose={this.close} style={{ width: '100%', padding: '30px' }} >
                    <Modal.Content scrolling style={{maxHeight:'100%'}}><Button style={{ float: 'right' }}
                            onClick={this.close} icon
                        ><Icon name='x' />

                        </Button>
                        <Course /></Modal.Content>
                    </Modal>
                    <Modal open={open2} onClose={this.close2} style={{ width: '100%', padding: '30px' }} >
                    <Modal.Content scrolling style={{maxHeight:'100%'}}><Button style={{ float: 'right' }}
                            onClick={this.close2} icon
                        ><Icon name='x' />

                        </Button>
                        <Safe /></Modal.Content>
                    </Modal>
                    <Modal open={open3} onClose={this.close3} style={{ width: '100%', padding: '30px' }} >
                    <Modal.Content scrolling style={{maxHeight:'100%'}}><Button style={{ float: 'right' }}
                            onClick={this.close3} icon
                        ><Icon name='x' />

                        </Button>
                        <Biotech /></Modal.Content>
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
                    <Modal open={openSoon} onClose={this.closeSoon} style={{ width: '100%', padding: '30px' }} >
                        <Modal.Content scrolling style={{maxHeight:'100%'}}>
                        <Button style={{ float: 'right' }}
                            onClick={this.closeSoon} icon
                        ><Icon name='x' />

                        </Button>
                        <h1>Coming Soon...</h1>
                        </Modal.Content>
                    </Modal>
                </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>
                    <div className="col-lg-7 col-md-9 col-sm-12 col-12 ">
                        <h1 style={{  fontFamily: 'Raleway', fontWeight: 600 }}>Other Projects</h1>
                        <p style={{ paddingBottom: '30px',fontFamily: 'Raleway',letterSpacing:'0.1pt' }} className="">Various projects gathered through Independent Consulting, Summer Work, and Hobby Porgramming. 2016-2020</p>

                    </div>
                    <div className="col-lg-3 col-md-3">
                    {/*<Dropdown style={{ float: 'right' }}
                        placeholder='Code'
                        fluid
                        selection
                        options={dropdown}
                    />*/}
                    </div>
                    
                </div>  
                <hr style={{ paddingBottom: '30px'}}></hr>     

                <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}} className="row center-heading" >
                    
                    <Project  color="#05c3de" year="2019" onClick={this.open3} className="" title="Biotech Leadership" icon1={js} icon2={php} icon3={ps} desc="Website created for a start-up consulting firm working with multinational pharmaceutical companies offering leadership services." />
                    <Project color="#23beed" year="2019" onClick={this.open2} title="SAFE Dentistry" icon1={sketch} icon2={ps} icon3={js} desc="Website designed for Safe Dentistry inc. a start-up speacializing in dental office safety inspections ensuring proper procedures." />
                    <Project color="#e0822b" year="2019" onClick={this.open} title="Landlord-Tenant App" icon1={java} icon2={python} desc="Lead agile development of C++ application to help tenants effectively communicate with their Landlords through messaging, maintenance requests, and rent payments." />
                    <Project color="#813cc7"year="2019" onClick={this.open} title="Course Projects" icon1={java} icon2={python} desc="Various algorithm implementations in Java with brute force and optimized approaches and comparisons. Simulated banking system in Python to practice common QA techniques." />
                    <Project color="#FFB615"year="2017" onClick={this.open4} title="Enbridge Station FAST" icon1={js} icon2={ps} icon3="" desc="Internal Enbridge Application - Station Field Assesment Survey Tool. An application to collect field asset integrity and report findings to management." />
                    <Project color="#FFB615"year="2018" onClick={this.openSoon} title="Enbridge PM Tool" icon1={js} icon2={ps} icon3="" desc="Internal Enbridge Application - Engineering Dept. Project Management Tool to allow PMs to submit status updates and display them on a compiled dashboard." />
                    <Project color="#813cc7"year="2017" onClick={this.openSoon} title="HAUS Mobile App" icon1={sketch} icon2={java} icon3="" desc="Tinder for Renting Houses! First year Capstone project developed in Android Studio. Oppourtunity to develop a business alongside the software to make it work." />
                    <Project color="#e86235"year="2019" onClick={this.openSoon} title="Reno Mobile App" icon1={react} icon2={sketch} icon3="" desc="React Native application to help streamline finding contractors for renovations and emergency jobs. Tracks materials purchased, hours, etc. helping homeowners." />

            </div>
            </div>
        )
    }
}

export default OtherProjects
