import React from 'react'

export class AddOption extends React.Component {
    state = { value: '', error: '' }
    
    render() {
        return (
            <div>
                <form className="widget-footer__content" 
                    onSubmit={this.onHandleAddOption}>
                    <textarea className="widget-footer__content__input" rows="3"
                        type="text" name="option" placeholder="Insert something to do"
                        value={this.state.value} onChange={this.onOptionChanged} />
                    <div className="widget-footer__content__action">
                        <button className="button" disabled={!this.state.value.length > 0}>Add option</button>
                    </div>
                </form>
                {this.state.error && <p className="widget-footer__error">{this.state.error}</p>}
            </div>
        )
    }
    onOptionChanged = (event) => {
        this.setState({ value: event.target.value })
    }
    onHandleAddOption = (event) => {
        event.preventDefault()
        const error = this.props.handleAddOption(this.state.value.trim())
        this.setState((prev) => ({ value: error ? prev.value : '', error }))
    }
}