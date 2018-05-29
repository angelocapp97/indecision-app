
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.title = 'Indecision App'
        this.subtitle = 'Put your live in the hands of a computer'
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.state = {
            options: props.options
        }
    }
    render() {
        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle} />
                <Options
                    options={this.state.options}
                    handleAddOption={this.handleAddOption} 
                    handleRemoveAll={this.handleRemoveAll} 
                />
            </div>
        )
    }
    handleAddOption(option) {
        if (option && option.trim()) {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat([option])
                }
            })
            return
        }

        return 'Unable to add this option.'
    }
    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
}
IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

class Options extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ( 
            <div>
                {
                    (this.props.options && this.props.options.length > 0) ? (
                        <div>
                            <p>There are some options:</p>
                            <div className="list-container">
                                {this.props.options.map((item) => <Option key={this.props.options.indexOf(item)} text={`${this.props.options.indexOf(item) + 1} - ${item}`} />)}
                            </div>
                        </div>
                    ) : <p className="no-options">There are no options to show.</p>
                }
                <div>
                    <AddOption handleAddOption={this.props.handleAddOption} />
                    <RemoveAll 
                        handleRemoveAll={this.props.handleRemoveAll}
                        optionsLength={this.props.options.length}
                    />
                </div>
            </div>
        )
    }
}

const Option = (props) => {
    return (
        <li>{props.text}</li>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.onOptionChanged = this.onOptionChanged.bind(this)
        this.onHandleAddOption = this.onHandleAddOption.bind(this)
        this.state = { 
            value: '',
            error: ''
        }
    }
    render() {
        return (
            <form onSubmit={this.onHandleAddOption}>
                <input type="text" name="option" placeholder="Something to do"
                    value={this.state.value} onChange={this.onOptionChanged}/>
                <button disabled={!this.state.value.length > 0}>Add option</button>
                {this.state.error && <p className="error">{this.state.error}</p>}
            </form>
        )
    }
    onOptionChanged(event) {
        this.setState({ value: event.target.value.trim() })
    }
    onHandleAddOption(event) {
        event.preventDefault()
        const error = this.props.handleAddOption(this.state.value)
        this.setState((prev) => {
            return {
                value: error ? prev.value : '',
                error
            }
        })
    }
}

class RemoveAll extends React.Component {
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app-root'))