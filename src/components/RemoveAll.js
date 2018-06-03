import React from 'react'

export class RemoveAll extends React.Component {
    render() {
        return (
            <button
                className="button button--link"
                onClick={this.onHandleRemoveAll} 
                disabled={!this.props.optionsLength > 0}>
                Remove All
            </button>
        )
    }
    onHandleRemoveAll = (event) => {
        event.preventDefault()
        this.props.handleRemoveAll()
    }
}