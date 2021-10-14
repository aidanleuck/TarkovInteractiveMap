import React, { Component } from 'react';
import MapView from './MapView.js'

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
            origin:{
                x:0,
                y:0,
            },
            translation:{
                x:0,
                y:0,
            },
            prevCoords:{
                x:0,
                y:0,
            }
        }
    }
    componentDidMount(){
        const height = this.viewPort.clientHeight;
        const width = this.viewPort.clientWidth;
        this.setState({height: height})
        this.setState({width:width})

        this.setState({origin:{ x: width/2, y: height/2}})
        this.setState({prevCoords:{ x: width/2, y: height/2}})
        
    }
    handleZoom(event){
        const newZoom = this.state.currentZoom + parseFloat(this.props.zoomFactor);
        if(newZoom < parseFloat(this.props.maxZoom)){
            this.setState({currentZoom: newZoom})
        }
        else{
            this.setState({currentZoom: this.props.maxZoom})
        }
        

        const height = this.viewPort.clientHeight/newZoom;
        const width = this.viewPort.clientWidth/newZoom;
       


        this.setState({height: height})
        this.setState({width: width})
        
        const currentCoordsX = this.state.currentCoords.x;
        const currentCoordsY = this.state.currentCoords.y;

        let translationDistanceX = (this.state.origin.x - currentCoordsX);
        let translationDistanceY = (this.state.origin.y - currentCoordsY);

        translationDistanceX = (translationDistanceX)
        translationDistanceY = (translationDistanceY)

        
        


        if(translationDistanceX != 0 && translationDistanceY != 0){
            this.setState({translation:{x:translationDistanceX, y: translationDistanceY}})
            this.setState({prevCoords:{x: currentCoordsX, y:currentCoordsY}})
            
        }
        
        
    }
    onMouseMove(event){
        const [currentX, currentY] = [event.screenX, event.screenY];
        this.setState({currentCoords:{x: currentX, y: currentY}})
        
    }
    render(){
        return (
            <div className = "viewPort" 
            onWheel = {this.handleZoom.bind(this)} 
            onMouseMove={this.onMouseMove.bind(this)}
            ref={ (viewPort) => { this.viewPort = viewPort } }
            style ={{ WebkitTransform: `scale(${this.state.currentZoom}) translate(${this.state.translation.x}px, ${this.state.translation.y}px)`, 
            WebkitTransition: `transform 0.5s ease-in-out`,}}>
            <MapView></MapView>
            </div>
        );

    }
}
export default ViewController;