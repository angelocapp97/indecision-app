import React from 'react'

export class AddOption extends React.Component {
    state = { value: '', error: '' }
    
    render() {
        return (
            <form onSubmit={this.onHandleAddOption}>
                <input type="text" name="option" placeholder="Something to do"
                    value={this.state.value} onChange={this.onOptionChanged} />
                <button disabled={!this.state.value.length > 0}>Add option</button>
                {this.state.error && <p className="error">{this.state.error}</p>}
            </form>
        )
    }
    onOptionChanged = (event) => {
        this.setState({ value: event.target.value.trim() })
    }
    onHandleAddOption = (event) => {
        event.preventDefault()
        const error = this.props.handleAddOption(this.state.value)
        this.setState((prev) => ({ value: error ? prev.value : '', error }))
    }
}