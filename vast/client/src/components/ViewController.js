import React, { Component } from 'react';
import { calculateOffsetScale, getBuffer, UpdateScale } from '../helperFunctions/ZoomFunctions.js';
import "../CSS/map.css";
import image from "../Images/map.png";

// Controls the view of the map
class ViewController extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentZoom:1,
            height:0,
            width: 0,
            currentCoords:{
                x: 0,
                y: 0
            },
            adjOffset:{
                x:0,
                y:0
            },
            prevCoords:{
                x: 0,
                y: 0,
            },
            origin:{
                x:0,
                y:0,
            },
            translation:{
                x:0,
                y:0,
            },
            buffer:{
                x:0,
                y:0
            }
        }
    }
    // Sets initial values once the component has mounted
    componentDidMount(){
        const height = this.viewPort.clientHeight;
        const width = this.viewPort.clientWidth;
        this.setState({height: height})
        this.setState({width:width})

        this.setState({origin:{ x: width/2, y: height/2}})
        this.setState({prevCoords:{ x: width, y: height}})
        
    }
    // Event handler for scroll event
    handleZoom(event){
        // Calculates the new scale value
       const prevScale = this.state.currentZoom
    
       const newScale = UpdateScale(event, this.state, this.props)
       
         
       const [currentX, currentY] = [event.screenX, event.screenY];

         
       const newPos = {x: currentX, y: currentY}
       
       const [oldMouseX, oldMouseY] = calculateOffsetScale(newPos, prevScale);
       
       const [newMouseX, newMouseY]  = calculateOffsetScale(newPos, newScale)
       
       const [mouseOffsetX, mouseOffsetY] = [oldMouseX-newMouseX, 0];
    


       const [adjOffsetX, adjOffsetY] = [this.state.adjOffset.x + mouseOffsetX, this.state.adjOffset.y + mouseOffsetY]
       console.log(adjOffsetY);
   
      
      

      
       const [bufferWidth, bufferHeight] = getBuffer(this.state, newScale)
        // Calculates the new buffer frame around the image
       this.setState({currentZoom: newScale});
       this.setState({adjOffset:{x:adjOffsetX, y: adjOffsetY}})
       this.setState({buffer:{x: bufferWidth, y: bufferHeight}})
     
      
       this.setState({prevCoords:{x:currentX, y: currentY}})
   
    }
    // Keeps track of where the mouse is
    onMouseMove(event){
        const [currentX, currentY] = [event.screenX, event.screenY];
        this.setState({currentCoords:{x: currentX, y: currentY}})
        
    }
    render(){
        return (
    
            <div className = "viewPort" 
            ref={ (viewPort) => { this.viewPort = viewPort }}
            onWheel = {this.handleZoom.bind(this)} 
            onMouseMove={this.onMouseMove.bind(this)}
            style ={{transform: `scale(${this.state.currentZoom})`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            
            position: 'absolute',
            backgroundPosition: `${-this.state.adjOffset.x}px ${-this.state.adjOffset.y}px`,
            bottom: this.state.buffer.y,
            left: this.state.buffer.x,
            right: this.state.buffer.x,
            top: this.state.buffer.y
            //WebkitTransition: `transform linear`,
        }}>
            </div>
        );

    }
}
export default ViewController;