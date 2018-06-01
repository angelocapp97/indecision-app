import React from 'react'

export class RemoveAll extends React.Component {
    constructor(props) {
        super(props)
        this.onHandleRemoveAll = this.onHandleRemoveAll.bind(this)
    }
    render() {
        return <button onClick={this.onHandleRemoveAll} disabled={!this.props.optionsLength > 0}>Remove All</button>
    }
    onHandleRemoveAll(event) {
        event.preventDefault()
        this.props.handleRemoveAll()
    }
}