
const app = {
    title: 'Indecision App',
    subtitle: 'My first React app',
    options: ['Option one', 'Option two', 'Option three'],
    getOptions() {
        return (
            (app.options && app.options.length > 0) ? (
                <div>
                    <p>There are some options:</p>
                    <ol>
                        {this.options.map((option) => <li key={this.options.indexOf(option)}>{option}</li>)}
                    </ol>
                </div>
            ) : <p className="no-options">There are no options to show.</p>
        )
    }
};

const template = (
    <div>
        <h1>{app.title ? app.title : 'Anonymous'}</h1>
        {app.subtitle && <h3>{app.subtitle}</h3>}
        {app.getOptions()}
    </div>
)

const appRoot = document.getElementById('app-root')

ReactDOM.render(template, appRoot)