import React, { Component,createRef } from 'react'
import ReactDOM from 'react-dom';
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import Project from './ProjectCard.js'
import python from '../assets/images/python.png'
import js from '../assets/images/js.png'
import cpp from '../assets/images/cpp.png'
import qt from '../assets/images/qt.png'
import java from '../assets/images/java.png'
import ps from '../assets/images/ps.png'
import enbridge from '../assets/images/enbridge.jpg'
import ai from '../assets/images/illustrator.png'
import wordpress from '../assets/images/wordpress.png'
import android from '../assets/images/android.png'
import figma from '../assets/images/figma.png'
import sketch from '../assets/images/sketch.png'
import node from '../assets/images/node.png'
import php from '../assets/images/php.png'
import react from '../assets/images/react.png'
import './App.css'
import Course from './Course.js'
import Biotech from './Biotech.js'
import Safe from './Safe.js'
import SFAST from './SFAST.js'
import HAUS from './HAUS.js'
import Popup from './Popup.js'
import Reno from './Reno.js'
import PM from './PM.js'
import IconC from './Icon.js'
import sayblue from '../assets/images/sayblue.jpg'
import ProjectImage from './ImageCard.js'

import { Button, Header, Icon, Modal, Dropdown, Sticky, Ref } from 'semantic-ui-react'


export class OtherProjects extends Component {
    constructor() {

        super()
        this.state = {
            open: false,showAll:true, open2: false, open3: false, open4: false, openHaus: false, openReno: false, openPM: false, category: "All", projectList: "", codeList: [
                {
                    color: "#59a1ff", iconName:"pencil",type: "Design", year: "2019", onClick: this.open3, className: "", title: "Biotech Leadership", icon1: wordpress, icon2: js, icon3: php, desc: "Website created for a start-up consulting firm working with multinational pharmaceutical companies offering leadership services."
                },
                {
                    color: "#59a1ff", iconName:"code",type: "Code", year: "2019", onClick: this.open4, className: "", title: "Enbridge Station FAST",image:enbridge, icon1: js, icon2: ps, icon3: sketch, desc: "[Internal] - Station Field Assesment Survey Tool. Application to collect information about field asset integrity and report findings to management."
                },
                {
                    color: "#59a1ff", iconName:"code",type: "Code", year: "2019", onClick: this.open("Test Title"), className: "", title: "Course Projects", icon1: java, icon2: python, icon3: "", desc: "Various algorithm implementations in Java with brute force and optimized approaches and comparisons. Simulated banking system in Python to practice common QA techniques."
                },
                {
                    color: "#59a1ff", iconName:"pencil",type: "Design", year: "2020", onClick: ()=>window.open("https://www.figma.com/proto/cvDTmlYK6qZVFkQawCAyOn/SparQ-Mockup?node-id=20%3A8&viewport=118%2C599%2C0.19171765446662903&scaling=scale-down-width"), className: "", title: "SparQ Studios", icon1: figma, icon2: ps, icon3: sketch, desc: "SparQ Studios is a makerspace and design studio that provides a wide range of tools, machinery, knowledge, and expertise so that you can bring your idea into a physical form. "
                },  
                {
                    color: "#59a1ff", iconName:"pencil",type: "Design", year: "2019", onClick: this.open2, className: "", title: "SAFE Dentistry", icon1: figma, icon2: sketch, icon3: ps, desc: "Website designed for Safe Dentistry inc. a start-up speacializing in dental office safety inspections ensuring proper procedures."
                },
                {
                    color: "#59a1ff", iconName:"react",type: "Frontend", year: "2019", onClick: ()=>window.open("https://github.com/mike-briggs/fiscalfresh"), className: "", title: "Fiscal Fresh", icon1: react, icon2: python, icon3: sketch, desc: "Browse and search millions of healthy recipes, create a meal plan then continue to checkout. Required groceries will be auto added to Instacart."
                },
                {
                    color: "#59a1ff", iconName:"react",type: "Frontend", year: "2019", onClick: ()=>window.open("https://github.com/mike-briggs/Space-HourLogger"), className: "", title: "Queen's Sci Formal", icon1: react, icon2: node, icon3: sketch, desc: "This mern web application keeps track of 400+ simultaneous volunteers putting together the space themed formal. Features User, Manager, & Admin."
                },
                {
                    color: "#59a1ff", iconName:"code",type: "Code", year: "2019", onClick: this.openPM, className: "", title: "Enbridge PM Tool", icon1: js, icon2: ps, icon3: sketch, desc: "[Internal] - Engineering Dept. Project Management Tool to allow PMs to submit status updates and display them on a compiled dashboard."
                },
                {
                    color: "#59a1ff", iconName:"react",type: "Frontend", year: "2019", onClick: this.openReno, className: "", title: "Reno Mobile App", icon1: react, icon2: ps, icon3: sketch, desc: "React Native application to help streamline finding contractors and tracks materials purchased, working hours, timeline etc."
                },
                {
                    color: "#59a1ff", iconName:"pencil",type: "Design", year: "2020", onClick: ()=>window.open("https://www.figma.com/proto/wG7ZIz0ZDlt330kWFDed13/QMIX?node-id=246%3A30&viewport=764%2C155%2C0.10421545803546906&scaling=scale-down-width"), className: "", title: "QMIX Social Club", icon1: figma, icon2: ps, icon3: sketch, desc: "A new social club at Queen's University … that aims to provide a welcoming space for all students."
                },
                {
                    color: "#59a1ff", iconName:"code",type: "Code", year: "2019", onClick: ()=>window.open("https://github.com/mike-briggs/portfolio"), className: "", title: "This Site", icon1: react, icon2: figma, icon3: ps, desc: "I'm a Software Engineer studying in my final year at Queen's University with a passion for frontend development. I'm graduating April 2020 and actively looking for full time positions."
                },
                {
                    color: "#59a1ff", iconName:"code",type: "Code", year: "2019", onClick: this.openSoon, className: "", title: "Landlord-Tenant App", icon1: cpp, icon2: qt, icon3: ps, desc: "Lead agile development of C++ application to help tenants effectively communicate with their Landlords through messaging, maintenance requests, and rent payments."
                },
                {
                    color: "#59a1ff", iconName:"android",type: "Frontend", year: "2019", onClick: this.openHaus, className: "", title: "HAUS Mobile App", icon1: java, icon2: ps, icon3: android, desc: "Tinder for Renting Houses! First year Capstone project developed in Android Studio. Oppourtunity to develop a business alongside the software to make it work."
                }
            ], codeActive: false, designActive: false,frontendActive:false,currentTitle:"Not Set"
        }

    }

    close = () => this.setState({ open: false })
    open = (test) => this.setState({ open: true,currentTitle:test })
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
    changeActive = () => this.setState({ codeActive: !this.state.codeActive, designActive: !this.state.designActive,frontendActive:!this.state.frontendActive })

    changeCategory(cat) {
        this.setState({ category: cat,showAll:false })
        if (cat === "Code") {
            this.setState({ codeActive: true })
            this.setState({ designActive: false })
            this.setState({ frontendActive: false })

        } else if (cat === "Design") {
            this.setState({ codeActive: false })
            this.setState({ designActive: true })
            this.setState({ frontendActive: false })

        } else if(cat === "Frontend"){
            this.setState({ codeActive: false })
            this.setState({ designActive: false })
            this.setState({ frontendActive: true })
        }
    }

    showAll(){
        this.setState({category: "All",showAll:true, codeActive:false,designActive:false,frontendActive:false})
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
                                <Popup title={this.state.currentTitle} /></Modal.Content>
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
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7 col-md-8 col-sm-12 col-12 ">
                        <h1 style={{ fontFamily: 'Cabin', fontWeight: 600 }}>{this.state.category} Projects</h1>
                        <p style={{ paddingBottom: '30px', fontFamily: 'Cabin', lineHeight:'20pt',letterSpacing: '0.1pt' }} className="">Various projects gathered through independent consulting, summer work, and hobby programming. 2016-2020</p>

                    </div>
                    <div className="col-lg-3 col-md-4">
                        
                        <Button style={{float: 'left', transitionDuration: '0.5s', color: this.state.showAll ? "#fff" : "#59a1ff", backgroundColor: this.state.showAll ? "#59a1ff" : "transparent",borderColor:'#59a1ff',border:'solid #59a1ff 1px',borderWeight:'1px' }}
                            onClick={() => this.showAll()} icon circular
                        ><Icon name='th' />

                        </Button>
                        <Button style={{padding:'10px',fontSize:'16pt',float: 'left', transitionDuration: '0.5s', color: this.state.frontendActive ? "#fff" : "#59a1ff", backgroundColor: this.state.frontendActive ? "#59a1ff" : "transparent",borderColor:'#404040',border:'solid #59a1ff 1px',borderWeight:'1x' }}
                            onClick={() => this.changeCategory("Frontend")} icon circular
                        ><Icon name='react' />

                        </Button>
                        <Button style={{float: 'left',borderRadius:'100%', transitionDuration: '0.5s', color: this.state.codeActive ?"#fff" : "#59a1ff", backgroundColor: this.state.codeActive ? "#59a1ff" : "transparent",borderColor:'#404040',border:'solid #59a1ff 1px',borderWeight:'1px'}}
                            onClick={() => this.changeCategory("Code")} icon 
                        ><Icon name='code' />

                        </Button>
                        <Button style={{float: 'left', transitionDuration: '0.5s', color: this.state.designActive ? "#fff" : "#59a1ff", backgroundColor: this.state.designActive ? "#59a1ff" : "transparent",borderColor:'#404040',border:'solid #59a1ff 1px',borderWeight:'1px' }}
                            onClick={() => this.changeCategory("Design")} icon circular
                        ><Icon name='pencil' />

                        </Button>
                        
                        
                    </div>

                    <div className="col-lg-2 col-md-1 col-sm-12 col-12"></div>
                    
                    {/*<ul style={{ display: 'flex',opacity:'.1',float:'left',textAlign:'left',paddingTop:'20px'}} className="logoGroup">
                  <li><IconC link="" image={react} style={{ paddingLeft: '0px',display:this.state.codeActive ? 'none !important' : undefined}} /></li>
                  <li><IconC link="" image={java} /></li>
                  <li><IconC link="" image={js} /></li>
                  <li><IconC link="" image={ai} /></li>
                  <li><IconC link="" image={ps} /></li>
                  <li><IconC link="" image={figma} /></li>
                  <li><IconC link="" image={wordpress} /></li>
                  <li><IconC link="" image={python} /></li>

                </ul>*/}

                </div>
                
                

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} className="row center-heading" >
                    {this.state.showAll

                        ?
                        this.state.codeList.map(item => (
                            <Project iconName={item.iconName} color={item.color} onClick={item.onClick} year="2019" className="" title={item.title} icon1={item.icon1} icon2={item.icon2} icon3={item.icon3} desc={item.desc} />
                        ))

                        :

                        this.state.codeList.filter(item => item.type === this.state.category).map(item => (
                            <Project iconName={item.iconName} color={item.color} onClick={item.onClick} year="2019" className="" title={item.title} icon1={item.icon1} icon2={item.icon2} icon3={item.icon3} desc={item.desc} />
                        ))

                    }
                </div>
                
            </div>
        )
    }
}

export default OtherProjects
