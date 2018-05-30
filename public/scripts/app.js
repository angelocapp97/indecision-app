'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.title = props.title;
        _this.subtitle = props.subtitle;
        _this.state = { options: props.options };

        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
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
                    handleRemoveAll: this.handleRemoveAll,
                    handleDeleteOption: this.handleDeleteOption
                })
            );
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option || !option.trim()) {
                return 'Unable to add \'' + option + '\' option.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'The option \'' + option + '\' already exists.';
            }

            this.setState(function (prev) {
                return { options: [].concat(_toConsumableArray(prev.options), [option]) };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            if (!optionToRemove || !optionToRemove.trim()) {
                return 'Unable to remove \'' + optionToRemove + '\' option.';
            } else if (this.state.options.indexOf(optionToRemove) === -1) {
                return 'The option \'' + optionToRemove + '\' doesn\'t exists.';
            }

            this.setState(function (prev) {
                return {
                    options: prev.options.filter(function (option) {
                        return option !== optionToRemove;
                    })
                };
            });
        }
    }, {
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    title: 'Indecision App',
    subtitle: '',
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
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
                            return React.createElement(Option, { option: item,
                                handleDeleteOption: _this3.props.handleDeleteOption,
                                key: _this3.props.options.indexOf(item),
                                _key: _this3.props.options.indexOf(item),
                                value: item
                            });
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

var Option = function (_React$Component3) {
    _inherits(Option, _React$Component3);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this4 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this4.state = { error: '' };

        _this4.onClickDeleteOption = _this4.onClickDeleteOption.bind(_this4);
        return _this4;
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                this.props._key + 1,
                ' \u2013 ',
                this.props.value,
                React.createElement(
                    'button',
                    { onClick: this.onClickDeleteOption },
                    'Delete'
                ),
                this.state.error && React.createElement(
                    'span',
                    { className: 'error' },
                    this.state.error
                )
            );
        }
    }, {
        key: 'onClickDeleteOption',
        value: function onClickDeleteOption(event) {
            var error = this.props.handleDeleteOption(this.props.value);
            this.setState({ error: error });
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this5.state = { value: '', error: '' };

        _this5.onOptionChanged = _this5.onOptionChanged.bind(_this5);
        _this5.onHandleAddOption = _this5.onHandleAddOption.bind(_this5);
        return _this5;
    }

    _createClass(AddOption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.onHandleAddOption },
                React.createElement('input', { type: 'text', name: 'option', placeholder: 'Something to do',
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
                return { value: error ? prev.value : '', error: error };
            });
        }
    }]);

    return AddOption;
}(React.Component);

var RemoveAll = function (_React$Component5) {
    _inherits(RemoveAll, _React$Component5);

    function RemoveAll(props) {
        _classCallCheck(this, RemoveAll);

        var _this6 = _possibleConstructorReturn(this, (RemoveAll.__proto__ || Object.getPrototypeOf(RemoveAll)).call(this, props));

        _this6.onHandleRemoveAll = _this6.onHandleRemoveAll.bind(_this6);
        return _this6;
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

ReactDOM.render(React.createElement(IndecisionApp, { options: ['angelo', 'cappelletti', 'luco'] }), document.getElementById('app-root'));
