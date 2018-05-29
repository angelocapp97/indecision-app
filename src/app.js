
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.title = 'Indecision App'
        this.subtitle = 'Put your live in the hands of a computer'
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.state = {
            options: []
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
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }
    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
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
                    <RemoveAll handleRemoveAll={this.props.handleRemoveAll} />
                </div>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.text}</li>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.onHandleAddOption = this.onHandleAddOption.bind(this)
    }
    render() {
        return (
            <form onSubmit={this.onHandleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        )
    }
    onHandleAddOption(event) {
        event.preventDefault()
        const option = event.target.elements.option.value.trim()
        if (option) {
            this.props.handleAddOption(option)
            event.target.elements.option.value = ''
        }
    }
}

class RemoveAll extends React.Component {
    constructor(props) {
        super(props)
        this.onHandleRemoveAll = this.onHandleRemoveAll.bind(this)
    }
    render() {
        return <button onClick={this.onHandleRemoveAll}>Remove All</button>
    }
    onHandleRemoveAll(event) {
        event.preventDefault()
        this.props.handleRemoveAll()
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app-root'))