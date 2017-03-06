'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * RestError class
 */
var RestError = function (_Error) {
  _inherits(RestError, _Error);

  /**
   * @param {Number}  code      BetaSeries API error code
   * @param {String}  message   Error message
   * @param {Array}   errors    List of errors
   */
  function RestError(code, message, errors) {
    _classCallCheck(this, RestError);

    var _this = _possibleConstructorReturn(this, (RestError.__proto__ || Object.getPrototypeOf(RestError)).call(this, message));

    _this.name = 'RestError';
    _this.code = parseInt(code, 10);
    _this.message = message;
    _this.errors = errors;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(_this, _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }
    return _this;
  }

  return RestError;
}(Error);

exports.default = RestError;