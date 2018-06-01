import React from 'react'

export class Option extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: '' }

        this.onClickDeleteOption = this.onClickDeleteOption.bind(this)
    }
    render() {
        return (
            <li>
                {this.props._key + 1} – {this.props.value}
                <button onClick={this.onClickDeleteOption}>Delete</button>
                {this.state.error && <span className="error">{this.state.error}</span>}
            </li>
        )
    }
    onClickDeleteOption(event) {
        const error = this.props.handleDeleteOption(this.props.value)
        this.setState({ error })
    }
}