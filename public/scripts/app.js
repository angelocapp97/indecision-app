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
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
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

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

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
                            return React.createElement(Option, { key: _this4.props.options.indexOf(item), text: _this4.props.options.indexOf(item) + 1 + ' - ' + item });
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
                    React.createElement(RemoveAll, { handleRemoveAll: this.props.handleRemoveAll })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                this.props.text
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.onHandleAddOption = _this6.onHandleAddOption.bind(_this6);
        return _this6;
    }

    _createClass(AddOption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.onHandleAddOption },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    'Add option'
                )
            );
        }
    }, {
        key: 'onHandleAddOption',
        value: function onHandleAddOption(event) {
            event.preventDefault();
            var option = event.target.elements.option.value.trim();
            if (option) {
                this.props.handleAddOption(option);
                event.target.elements.option.value = '';
            }
        }
    }]);

    return AddOption;
}(React.Component);

var RemoveAll = function (_React$Component6) {
    _inherits(RemoveAll, _React$Component6);

    function RemoveAll(props) {
        _classCallCheck(this, RemoveAll);

        var _this7 = _possibleConstructorReturn(this, (RemoveAll.__proto__ || Object.getPrototypeOf(RemoveAll)).call(this, props));

        _this7.onHandleRemoveAll = _this7.onHandleRemoveAll.bind(_this7);
        return _this7;
    }

    _createClass(RemoveAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.onHandleRemoveAll },
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
