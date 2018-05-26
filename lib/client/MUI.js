'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _appbar = require('muicss/lib/react/appbar');

var _appbar2 = _interopRequireDefault(_appbar);

var _button = require('muicss/lib/react/button');

var _button2 = _interopRequireDefault(_button);

var _container = require('muicss/lib/react/container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MUI = function (_React$Component) {
	_inherits(MUI, _React$Component);

	function MUI() {
		_classCallCheck(this, MUI);

		return _possibleConstructorReturn(this, (MUI.__proto__ || Object.getPrototypeOf(MUI)).apply(this, arguments));
	}

	_createClass(MUI, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_appbar2.default, null),
				_react2.default.createElement(
					_container2.default,
					null,
					_react2.default.createElement(
						_button2.default,
						{ color: 'primary' },
						'button'
					)
				)
			);
		}
	}]);

	return MUI;
}(_react2.default.Component);

// ReactDOM.render(<MUI />, document.getElementById('example'));


exports.default = MUI;