
const appRoot = document.getElementById('app-root')

const app = {
    title: 'Indecision App',
    subtitle: 'My first React app',
    options: ['Option 1', 'Option 2', 'Option 3'],
    getOptions() {
        return (
            (app.options && app.options.length > 0) ? (
                <div>
                    <p>There are some options:</p>
                    <ol>
                        {this.options.map((option) => <li key={this.options.indexOf(option)}>{`${this.options.indexOf(option) + 1} - ${option}`}</li>)}
                    </ol>
                </div>
            ) : <p className="no-options">There are no options to show.</p>
        )
    }
};

if (!app.options) app.options = []
const addOption = (option) => {
    app.options.push(option)
    render()
}

const onFormSubmit = (event) => {
    event.preventDefault()
    if (event.target.elements.option.value) {
        const option = event.target.elements.option.value
        addOption(option)
        event.target.elements.option.value = ''   
    }
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title ? app.title : 'Anonymous'}</h1>
            {app.subtitle && <h3>{app.subtitle}</h3>}
            {app.getOptions()}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
}
render()