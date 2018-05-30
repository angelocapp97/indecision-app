
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.title = props.title
        this.subtitle = props.subtitle
        this.state = { options: props.options }

        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }
    render() {
        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle} />
                <Options
                    options={this.state.options}
                    handleAddOption={this.handleAddOption} 
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}
                />
            </div>
        )
    }
    handleAddOption(option) {
        if (!option || !option.trim()) {
            return 'Unable to add this option.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prev) => ({ options: prev.options.concat([option]) }))
    }
    handleDeleteOption(optionToRemove) {
        if (!optionToRemove || !optionToRemove.trim()) {
            return 'Unable to remove this option.'
        } 
        else if (this.state.options.indexOf(optionToRemove) === -1) {
            return 'This option doesn\'t exists.'
        }

        this.setState((prev) => ({
            options: prev.options.filter((option) => option !== optionToRemove)
        }))
    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }
}
IndecisionApp.defaultProps = {
    title: 'Indecision App',
    subtitle: '',
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
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
                                {this.props.options.map((item) => (
                                    <Option option={item}
                                        handleDeleteOption={this.props.handleDeleteOption}
                                        key={this.props.options.indexOf(item)}
                                        _key={this.props.options.indexOf(item)}
                                        value={item}
                                    />
                                ))}
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

class Option extends React.Component {
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

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '', error: '' }

        this.onOptionChanged = this.onOptionChanged.bind(this)
        this.onHandleAddOption = this.onHandleAddOption.bind(this)
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
        this.setState((prev) => ({ value: error ? prev.value : '', error }))
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

ReactDOM.render(<IndecisionApp options={['angelo', 'cappelletti', 'luco']} />, document.getElementById('app-root'))