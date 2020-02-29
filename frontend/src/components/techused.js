import React, { Component } from 'react'

export class techused extends Component {
    render() {
        return (
            <div>
                <ul style={{ display: 'flex' }} className="logoGroup">
                        
                        <li><a style={{ padding: '15px', paddingLeft: '0px', paddingTop: '10px', paddingRight: '15px' }} className="logoIconA" href="#search"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={this.props.source1}></img></a></li>

                        <li><a style={{ padding: '15px', paddingTop: '10px', paddingRight: '15px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={this.props.source2}></img></a></li>
                        <li><a style={{ padding: '15px', paddingTop: '10px', paddingRight: '15px' }} className="logoIconA"><img className="techIcon" style={{ paddingTop: '10px', width: '40px', height: 'auto' }} src={this.props.source3}></img></a></li>
                      </ul>
            </div>
        )
    }
}

export default techused
