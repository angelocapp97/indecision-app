import React from 'react'

export class Option extends React.Component {
    state = { error: '' }
    
    render() {
        return (
            <div className="widget-body__option">
                <div className="widget-body__option--text">
                    <p className="widget-body__option--text--value">{this.props._key}. {this.props.value}</p>
                    {this.state.error && <p className="widget-body__option--text--error">{this.state.error}</p>}
                </div>
                <div className="widget-body__option--action">
                    <button
                        className="button button--link"
                        onClick={this.onClickDeleteOption}>
                        Remove
                    </button>
                </div>
            </div>
        )
    }
    onClickDeleteOption = (event) => {
        const error = this.props.handleDeleteOption(this.props.value)
        this.setState({ error })
    }
}