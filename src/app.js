
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your live in the hands of a computer'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Options />
            </div>
        )
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
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onRemoveAll = this.onRemoveAll.bind(this)
        this.state = {
            options: []
        }
    }
    render() {
        return ( 
            <div>
                {
                    (this.state.options && this.state.options.length > 0) ? (
                        <div>
                            <p>There are some options:</p>
                            <div className="list-container">
                                {this.state.options.map((item) => <Option key={this.state.options.indexOf(item)} text={`${this.state.options.indexOf(item) + 1} - ${item}`} />)}
                            </div>
                        </div>
                    ) : <p className="no-options">There are no options to show.</p>
                }
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <input type="text" name="option" />
                        <button>Add option</button>
                    </form>
                    <button onClick={this.onRemoveAll}>Remove All</button>
                </div>
            </div>
        )
    }
    onFormSubmit(event) {
        event.preventDefault()
        const option = event.target.elements.option.value
        if (option) {
            this.setState((prevState) => {
                let newOptions = []
                if (prevState.options && prevState.options.length > 0) {
                    newOptions = prevState.options
                }
                newOptions.push(option)
                return { options: newOptions }   
            })
            event.target.elements.option.value = ''
        }
    }
    onRemoveAll(event) {
        event.preventDefault()
        this.setState(() => {
            return {
                options: []
            }
        })
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.text}</li>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app-root'))