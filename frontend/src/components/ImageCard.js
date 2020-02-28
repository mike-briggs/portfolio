import React, { Component } from 'react'
import '../assets/css/bootstrap.min.css'
export class ImageCard extends Component {
    render() {
        const style = {
            
            margin: '10px', borderWeight: '10px', boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.04)'
      
          };
        return (
            <div   style={style} className="col-lg-4 col-md-4 col-sm-12 col-12">
        <img src={this.props.source}></img>



      </div>
        )
    }
}

export default ImageCard
