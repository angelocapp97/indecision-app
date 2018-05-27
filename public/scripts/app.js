'use strict';

var appRoot = document.getElementById('app-root');

var app = {
    title: 'Indecision App',
    subtitle: 'My first React app',
    options: ['Option 1', 'Option 2', 'Option 3'],
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

if (!app.options) app.options = [];
var optionsCounter = app.options ? app.options.length : 0;
var addOption = function addOption() {
    optionsCounter++;
    app.options.push('Option ' + optionsCounter);
    renderOptionsList();
};

var renderOptionsList = function renderOptionsList() {
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
        app.getOptions(),
        React.createElement(
            'button',
            { onClick: addOption },
            'Add option'
        )
    );

    ReactDOM.render(template, appRoot);
};
renderOptionsList();
