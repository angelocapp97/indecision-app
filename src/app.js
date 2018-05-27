
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
let optionsCounter = app.options ? app.options.length : 0
const addOption = () => {
    optionsCounter++
    app.options.push(`Option ${optionsCounter}`)
    renderOptionsList()
}

const renderOptionsList = () => {
    const template = (
        <div>
            <h1>{app.title ? app.title : 'Anonymous'}</h1>
            {app.subtitle && <h3>{app.subtitle}</h3>}
            {app.getOptions()}
            <button onClick={addOption}>Add option</button>
        </div>
    )

    ReactDOM.render(template, appRoot)
}
renderOptionsList()