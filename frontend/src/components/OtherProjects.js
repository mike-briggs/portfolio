import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import Project from './ProjectCard.js'
import python from '../assets/images/python.png'
import js from '../assets/images/js.png'
import ps from '../assets/images/ps.png'
import cpp from '../assets/images/cpp.png'
import qt from '../assets/images/qt.png'

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
import HAUS from './HAUS.js'
import Reno from './Reno.js'
import PM from './PM.js'

import sayblue from '../assets/images/sayblue.jpg'
import ProjectImage from './ImageCard.js'

import { Button, Header, Icon, Modal, Dropdown, Sticky } from 'semantic-ui-react'


export class OtherProjects extends Component {
    constructor() {

        super()
        this.state = {
            open: false,showAll:true, open2: false, open3: false, open4: false, openHaus: false, openReno: false, openPM: false, category: "All", projectList: "", codeList: [
                {
                    color: "#05c3de", type: "Design", year: "2019", onClick: this.open3, className: "", title: "Biotech Leadership", icon1: js, icon2: php, icon3: ps, desc: "Website created for a start-up consulting firm working with multinational pharmaceutical companies offering leadership services."
                },
                {
                    color: "#23beed", type: "Design", year: "2019", onClick: this.open2, className: "", title: "SAFE Dentistry", icon1: js, icon2: sketch, icon3: ps, desc: "Website designed for Safe Dentistry inc. a start-up speacializing in dental office safety inspections ensuring proper procedures."
                },

                {
                    color: "#813cc7", type: "Code", year: "2019", onClick: this.open, className: "", title: "Course Projects", icon1: java, icon2: python, icon3: "", desc: "Various algorithm implementations in Java with brute force and optimized approaches and comparisons. Simulated banking system in Python to practice common QA techniques."
                },
                {
                    color: "#FFB615", type: "Code", year: "2019", onClick: this.open4, className: "", title: "Enbridge Station FAST", icon1: js, icon2: ps, icon3: sketch, desc: "Internal Enbridge Application - Station Field Assesment Survey Tool. An application to collect information about field asset integrity and report findings to management."
                },
                {
                    color: "#FFB615", type: "Code", year: "2019", onClick: this.openPM, className: "", title: "Enbridge PM Tool", icon1: js, icon2: ps, icon3: sketch, desc: "Internal Enbridge Application - Engineering Dept. Project Management Tool to allow PMs to submit status updates and display them on a compiled dashboard."
                },
                {
                    color: "#e0822b", type: "Code", year: "2019", onClick: this.openReno, className: "", title: "Reno Mobile App", icon1: react, icon2: ps, icon3: sketch, desc: "React Native application to help streamline finding contractors for renovations and emergency jobs. Tracks materials purchased, hours, etc. helping homeowners."
                },
                {
                    color: "#813cc7", type: "code", year: "2019", onClick: this.openHaus, className: "", title: "HAUS Mobile App", icon1: java, icon2: ps, icon3: sketch, desc: "Tinder for Renting Houses! First year Capstone project developed in Android Studio. Oppourtunity to develop a business alongside the software to make it work."
                },
                {
                    color: "#e0822b", type: "code", year: "2019", onClick: this.openSoon, className: "", title: "Landlord-Tenant App", icon1: cpp, icon2: qt, icon3: ps, desc: "Lead agile development of C++ application to help tenants effectively communicate with their Landlords through messaging, maintenance requests, and rent payments."
                }
            ], codeActive: false, designActive: false,
        }

    }

    close = () => this.setState({ open: false })
    open = () => this.setState({ open: true })
    close2 = () => this.setState({ open2: false })
    open2 = () => this.setState({ open2: true })
    close3 = () => this.setState({ open3: false })
    open3 = () => this.setState({ open3: true })
    close4 = () => this.setState({ open4: false })
    open4 = () => this.setState({ open4: true })
    closeHaus = () => this.setState({ openHaus: false })
    openHaus = () => this.setState({ openHaus: true })
    closeSoon = () => this.setState({ openSoon: false })
    openSoon = () => this.setState({ openSoon: true })
    closeReno = () => this.setState({ openReno: false })
    openReno = () => this.setState({ openReno: true })
    closePM = () => this.setState({ openPM: false })
    openPM = () => this.setState({ openPM: true })
    changeActive = () => this.setState({ codeActive: !this.state.codeActive, designActive: !this.state.designActive })

    changeCategory(cat) {
        this.setState({ category: cat,showAll:false })
        if (cat === "Code") {
            this.setState({ codeActive: true })
            this.setState({ designActive: false })
        } else if (cat === "Design") {
            this.setState({ codeActive: false })
            this.setState({ designActive: true })
        }
    }

    showAll(){
        this.setState({category: "All",showAll:true, codeActive:false,designActive:false})
    }



    render() {

        

        /*<Project color="#23beed" year="2019" onClick={this.open2} title="SAFE Dentistry" icon1={sketch} icon2={ps} icon3={js} desc="Website designed for Safe Dentistry inc. a start-up speacializing in dental office safety inspections ensuring proper procedures." />
                    <Project color="#e0822b" year="2019" onClick={this.open} title="Landlord-Tenant App" icon1={java} icon2={python} desc="Lead agile development of C++ application to help tenants effectively communicate with their Landlords through messaging, maintenance requests, and rent payments." />
                    <Project color="#813cc7"year="2019" onClick={this.open} title="Course Projects" icon1={java} icon2={python} desc="Various algorithm implementations in Java with brute force and optimized approaches and comparisons. Simulated banking system in Python to practice common QA techniques." />
                    <Project color="#FFB615"year="2017" onClick={this.open4} title="Enbridge Station FAST" icon1={js} icon2={ps} icon3="" desc="Internal Enbridge Application - Station Field Assesment Survey Tool. An application to collect field asset integrity and report findings to management." />
                    <Project color="#FFB615"year="2018" onClick={this.openSoon} title="Enbridge PM Tool" icon1={js} icon2={ps} icon3="" desc="Internal Enbridge Application - Engineering Dept. Project Management Tool to allow PMs to submit status updates and display them on a compiled dashboard." />
                    <Project color="#813cc7"year="2017" onClick={this.openSoon} title="HAUS Mobile App" icon1={sketch} icon2={java} icon3="" desc="Tinder for Renting Houses! First year Capstone project developed in Android Studio. Oppourtunity to develop a business alongside the software to make it work." />
                    <Project color="#e86235"year="2019" onClick={this.openSoon} title="Reno Mobile App" icon1={react} icon2={sketch} icon3="" desc="React Native application to help streamline finding contractors for renovations and emergency jobs. Tracks materials purchased, hours, etc. helping homeowners." />
*/

        const { open, open2, open3, open4, value, openSoon, openHaus, openReno, openPM, projectList } = this.state
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
                            <Modal.Content scrolling style={{ maxHeight: '100%' }}><Button style={{ float: 'right' }}
                                onClick={this.close} icon
                            ><Icon name='x' />

                            </Button>
                                <Course /></Modal.Content>
                        </Modal>
                        <Modal open={open2} onClose={this.close2} style={{ width: '100%', padding: '30px' }} >
                            <Modal.Content scrolling style={{ maxHeight: '100%' }}><Button style={{ float: 'right' }}
                                onClick={this.close2} icon
                            ><Icon name='x' />

                            </Button>
                                <Safe /></Modal.Content>
                        </Modal>
                        <Modal open={openHaus} onClose={this.closeHaus} style={{ width: '100%', padding: '30px' }} >
                            <Modal.Content scrolling style={{ maxHeight: '100%' }}><Button style={{ float: 'right' }}
                                onClick={this.closeHaus} icon
                            ><Icon name='x' />

                            </Button>
                                <HAUS /></Modal.Content>
                        </Modal>
                        <Modal open={openPM} onClose={this.closePM} style={{ width: '100%', padding: '30px' }} >
                            <Modal.Content scrolling style={{ maxHeight: '100%' }}><Button style={{ float: 'right' }}
                                onClick={this.closePM} icon
                            ><Icon name='x' />

                            </Button>
                                <PM /></Modal.Content>
                        </Modal>
                        <Modal open={openReno} onClose={this.closeReno} style={{ width: '100%', padding: '30px' }} >
                            <Modal.Content scrolling style={{ maxHeight: '100%' }}><Button style={{ float: 'right' }}
                                onClick={this.closeReno} icon
                            ><Icon name='x' />

                            </Button>
                                <Reno /></Modal.Content>
                        </Modal>
                        <Modal open={open3} onClose={this.close3} style={{ width: '100%', padding: '30px' }} >
                            <Modal.Content scrolling style={{ maxHeight: '100%' }}><Button style={{ float: 'right' }}
                                onClick={this.close3} icon
                            ><Icon name='x' />

                            </Button>
                                <Biotech /></Modal.Content>
                        </Modal>
                        <Modal open={open4} onClose={this.close4} style={{ width: '100%', padding: '30px' }} >
                            <Modal.Content scrolling style={{ maxHeight: '100%' }}>
                                <Button style={{ float: 'right' }}
                                    onClick={this.close4} icon
                                ><Icon name='x' />

                                </Button>
                                <SFAST />
                            </Modal.Content>
                        </Modal>
                        <Modal open={openSoon} onClose={this.closeSoon} style={{ width: '100%', padding: '30px' }} >
                            <Modal.Content scrolling style={{ maxHeight: '100%' }}>
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
                        <h1 style={{ fontFamily: 'Raleway', fontWeight: 600 }}>{this.state.category} Projects</h1>
                        <p style={{ paddingBottom: '30px', fontFamily: 'Raleway', letterSpacing: '0.1pt' }} className="">Various projects gathered through Independent Consulting, Summer Work, and Hobby Programming. 2016-2020</p>

                    </div>
                    <div style={{ flexDirection: 'column' }} className="col-lg-3 col-md-3">
                        {/*<Dropdown style={{ float: 'right' }}
                        placeholder='Code'
                        fluid
                        selection
                        options={dropdown}
                    /><Button style={{float: 'left', transitionDuration:'0.5s'}}
                    onClick={()=>this.changeCategory("")} icon
                            ><Icon name='th'/>
  
                        </Button>*/}
                        <Button style={{ float: 'left', transitionDuration: '0.5s', color: this.state.showAll ? "#fff" : undefined, backgroundColor: this.state.showAll ? "#000" : undefined }}
                            onClick={() => this.showAll()} icon
                        ><Icon name='th' />

                        </Button>
                        <Button style={{ float: 'left', transitionDuration: '0.5s', color: this.state.codeActive ? "#fff" : undefined, backgroundColor: this.state.codeActive ? "#000" : undefined }}
                            onClick={() => this.changeCategory("Code")} icon
                        ><Icon name='code' />

                        </Button>
                        <Button style={{ float: 'left', transitionDuration: '0.5s', color: this.state.designActive ? "#fff" : undefined, backgroundColor: this.state.designActive ? "#000" : undefined }}
                            onClick={() => this.changeCategory("Design")} icon
                        ><Icon name='paint brush' />

                        </Button>
                        
                    </div>

                </div>
                <hr style={{ paddingBottom: '30px' }}></hr>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} className="row center-heading" >
                    {this.state.showAll

                        ?
                        this.state.codeList.map(item => (
                            <Project color={item.color} onClick={item.onClick} year="2019" className="" title={item.title} icon1={item.icon1} icon2={item.icon2} icon3={item.icon3} desc={item.desc} />
                        ))

                        :

                        this.state.codeList.filter(item => item.type === this.state.category).map(item => (
                            <Project color={item.color} onClick={item.onClick} year="2019" className="" title={item.title} icon1={item.icon1} icon2={item.icon2} icon3={item.icon3} desc={item.desc} />
                        ))

                    }
                </div>
            </div>
        )
    }
}

export default OtherProjects
