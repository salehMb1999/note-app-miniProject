import React, { Component } from 'react'
export default class ColorBox extends Component {
    
    render() {
        return (
            <div onClick={this.props.inputColorHandler.bind(this, this.props.color)} className='color-box' style={{backgroundColor : this.props.color}}>
                
            </div>
        )
    }
}
