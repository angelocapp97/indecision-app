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
var addOption = function addOption(option) {
    app.options.push(option);
    render();
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    if (event.target.elements.option.value) {
        var option = event.target.elements.option.value;
        addOption(option);
        event.target.elements.option.value = '';
    }
};

var onRemoveAllClick = function onRemoveAllClick() {
    app.options = [];
    render();
};

var render = function render() {
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
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAllClick },
            'Remove All'
        )
    );

    ReactDOM.render(template, appRoot);
};
render();
