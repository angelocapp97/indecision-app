'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.title = 'Indecision App';
        _this.subtitle = 'Put your live in the hands of a computer';
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.title, subtitle: this.subtitle }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleAddOption: this.handleAddOption,
                    handleRemoveAll: this.handleRemoveAll
                })
            );
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (option && option.trim()) {
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat([option])
                    };
                });
                return;
            }

            return 'Unable to add this option.';
        }
    }, {
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                null,
                this.props.options && this.props.options.length > 0 ? React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'There are some options:'
                    ),
                    React.createElement(
                        'div',
                        { className: 'list-container' },
                        this.props.options.map(function (item) {
                            return React.createElement(Option, { key: _this3.props.options.indexOf(item), text: _this3.props.options.indexOf(item) + 1 + ' - ' + item });
                        })
                    )
                ) : React.createElement(
                    'p',
                    { className: 'no-options' },
                    'There are no options to show.'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(AddOption, { handleAddOption: this.props.handleAddOption }),
                    React.createElement(RemoveAll, {
                        handleRemoveAll: this.props.handleRemoveAll,
                        optionsLength: this.props.options.length
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        'li',
        null,
        props.text
    );
};

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.onOptionChanged = _this4.onOptionChanged.bind(_this4);
        _this4.onHandleAddOption = _this4.onHandleAddOption.bind(_this4);
        _this4.state = {
            value: '',
            error: ''
        };
        return _this4;
    }

    _createClass(AddOption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.onHandleAddOption },
                React.createElement('input', { type: 'text', name: 'option',
                    value: this.state.value, onChange: this.onOptionChanged }),
                React.createElement(
                    'button',
                    { disabled: !this.state.value.length > 0 },
                    'Add option'
                ),
                this.state.error && React.createElement(
                    'p',
                    { className: 'error' },
                    this.state.error
                )
            );
        }
    }, {
        key: 'onOptionChanged',
        value: function onOptionChanged(event) {
            this.setState({ value: event.target.value.trim() });
        }
    }, {
        key: 'onHandleAddOption',
        value: function onHandleAddOption(event) {
            event.preventDefault();
            var error = this.props.handleAddOption(this.state.value);
            this.setState(function (prev) {
                return {
                    value: error ? prev.value : '',
                    error: error
                };
            });
        }
    }]);

    return AddOption;
}(React.Component);

var RemoveAll = function (_React$Component4) {
    _inherits(RemoveAll, _React$Component4);

    function RemoveAll(props) {
        _classCallCheck(this, RemoveAll);

        var _this5 = _possibleConstructorReturn(this, (RemoveAll.__proto__ || Object.getPrototypeOf(RemoveAll)).call(this, props));

        _this5.onHandleRemoveAll = _this5.onHandleRemoveAll.bind(_this5);
        return _this5;
    }

    _createClass(RemoveAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.onHandleRemoveAll, disabled: !this.props.optionsLength > 0 },
                'Remove All'
            );
        }
    }, {
        key: 'onHandleRemoveAll',
        value: function onHandleRemoveAll(event) {
            event.preventDefault();
            this.props.handleRemoveAll();
        }
    }]);

    return RemoveAll;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app-root'));
