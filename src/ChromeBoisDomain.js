import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
   constructor(props) {
    super(props);
    this.state = {
            message: "Mouse Event"
        }
  }
 
  handleEvent = (event) => {
   if (event.type === "mousedown") {
          this.setState({ message: "Mouse Down S"});
      } else {
          this.setState({ message: "Mouse Up A"});
      }
  }
 
  render() {
    return (
      <div>
      <div className="drawChromeBoiAtCoords">
          { this.state.message }
      </div>
        <div className="resize">
          <button className="btn btn-secondary" onMouseDown={ this.handleEvent } onMouseUp={ this.handleEvent } >
           Change Size
          </button>
        </div>
      </div>
    );
  }
}
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
