"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("muicss/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_React$Component) {
	_inherits(Example, _React$Component);

	function Example() {
		_classCallCheck(this, Example);

		return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
	}

	_createClass(Example, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				_react3.Container,
				{ style: { paddingTop: 50 } },
				_react2.default.createElement(
					_react3.Panel,
					{ className: "container" },
					_react2.default.createElement(
						_react3.Form,
						{ style: { flex: 1, justifyContent: 'flex-start' } },
						_react2.default.createElement(
							"legend",
							null,
							"Title"
						),
						_react2.default.createElement(
							"div",
							null,
							_react2.default.createElement(_react3.Input, { className: "inline", label: "Nombre" }),
							_react2.default.createElement(_react3.Input, { className: "inline", label: "Apellido" })
						),
						_react2.default.createElement(
							_react3.Select,
							{ name: "input", label: "Select Example", defaultValue: "option2" },
							_react2.default.createElement(_react3.Option, { value: "option1", label: "Option 1" }),
							_react2.default.createElement(_react3.Option, { value: "option2", label: "Option 2" }),
							_react2.default.createElement(_react3.Option, { value: "option3", label: "Option 3" }),
							_react2.default.createElement(_react3.Option, { value: "option4", label: "Option 4" })
						),
						_react2.default.createElement(_react3.Input, { label: "Input 2" }),
						_react2.default.createElement(
							_react3.Dropdown,
							{ color: "primary", label: "Dropdown" },
							_react2.default.createElement(
								_react3.DropdownItem,
								{ link: "#/link1" },
								"Option 1"
							),
							_react2.default.createElement(
								_react3.DropdownItem,
								null,
								"Option 2"
							),
							_react2.default.createElement(
								_react3.DropdownItem,
								null,
								"Option 3"
							),
							_react2.default.createElement(
								_react3.DropdownItem,
								null,
								"Option 4"
							)
						),
						_react2.default.createElement(_react3.Checkbox, { name: "inputA1", label: "Option one", defaultChecked: true }),
						_react2.default.createElement(_react3.Checkbox, { name: "inputA2", label: "Option two" }),
						_react2.default.createElement(_react3.Checkbox, { name: "inputA3", label: "Option three is disabled", disabled: true }),
						_react2.default.createElement(_react3.Radio, { name: "inputB", label: "Option one", defaultChecked: true }),
						_react2.default.createElement(_react3.Radio, { name: "inputB", label: "Option two" }),
						_react2.default.createElement(_react3.Radio, { name: "inputB", label: "Option three is disabled", disabled: true }),
						_react2.default.createElement(_react3.Textarea, { placeholder: "Textarea" }),
						_react2.default.createElement(
							_react3.Button,
							{ color: "primary" },
							"button"
						)
					)
				)
			);
		}
	}]);

	return Example;
}(_react2.default.Component);

exports.default = Example;