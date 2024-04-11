import React, { Component } from 'react'

export default class Note extends Component {

    render() {
        return (
            <div onClick={this.props.removeTodoHandler.bind(this, this.props.id)} className="card shadow-sm rounded" style={{ backgroundColor: this.props.noteColor }}><p className="card-text p-3">{this.props.title}</p></div>
        )
    }
}
