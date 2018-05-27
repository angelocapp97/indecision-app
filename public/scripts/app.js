'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'My first React app',
    options: ['Option one', 'Option two', 'Option three'],
    getOptions: function getOptions() {
        var _this = this;

        return app.options && app.options.length > 0 ? React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'There are some options:'
            ),
            React.createElement(
                'ol',
                null,
                this.options.map(function (option) {
                    return React.createElement(
                        'li',
                        { key: _this.options.indexOf(option) },
                        _this.options.indexOf(option) + 1 + ' - ' + option
                    );
                })
            )
        ) : React.createElement(
            'p',
            { className: 'no-options' },
            'There are no options to show.'
        );
    }
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title ? app.title : 'Anonymous'
    ),
    app.subtitle && React.createElement(
        'h3',
        null,
        app.subtitle
    ),
    app.getOptions()
);

var appRoot = document.getElementById('app-root');

ReactDOM.render(template, appRoot);
