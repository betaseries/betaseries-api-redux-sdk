'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _trimStart = require('lodash/trimStart');

var _trimStart2 = _interopRequireDefault(_trimStart);

var _stringify = require('qs/lib/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _RestError = require('../error/RestError');

var _RestError2 = _interopRequireDefault(_RestError);

var _betaseries = require('../../betaseries');

var _betaseries2 = _interopRequireDefault(_betaseries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * API provider
 *
 * @alias module:BetaSeries.api
 * @category static
 */
var ApiFetch = function () {
  /**
   * @param {Object} headers  Headers key, value
   */
  function ApiFetch() {
    var _this = this;

    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ApiFetch);

    this.setAuthenticatedHeader = function (token) {
      _this.headers = _extends({}, _this.headers, {
        'X-BetaSeries-Token': token
      });
    };

    this.getUrl = function (endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var paramString = (0, _stringify2.default)(params);
      if (paramString.length > 0) {
        paramString = '?' + paramString;
      }

      return _betaseries2.default.config.apiHost + '/' + (0, _trimStart2.default)(endPoint, '/') + paramString;
    };

    this.promiseHandler = function (request) {
      return request.then(function (response) {
        return _this.handleResponse(response);
      });
    };

    this.handleResponse = function (response) {
      if (response.ok && response.status === 204) {
        return Promise.resolve(null);
      }

      return response.json().then(function (json) {
        if (response.ok) {
          return json;
        }

        throw new _RestError2.default(json.errors[0].code, json.errors[0].text);
      });
    };

    this.withFormData = function () {
      return new _this.constructor(_extends({}, _this.headers, {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json'
      }));
    };

    this.get = function (endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _this.promiseHandler(fetch(_this.getUrl(endPoint, params), {
        method: 'GET',
        headers: _this.getHeaders(endPoint)
      }));
    };

    this.post = function (endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.promiseHandler(fetch(_this.getUrl(endPoint, params), {
        method: 'POST',
        headers: _this.getHeaders(endPoint),
        body: JSON.stringify(body)
      }));
    };

    this.patch = function (endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.promiseHandler(fetch(_this.getUrl(endPoint, params), {
        method: 'PATCH',
        headers: _this.getHeaders(endPoint),
        body: JSON.stringify(body)
      }));
    };

    this.upload = function (endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var picture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var formdata = new FormData();

      formdata.append(picture.key, {
        uri: picture.uri,
        type: 'image/jpg',
        name: picture.key + '.jpg'
      });

      formdata.append('body', JSON.stringify(body));

      return _this.withFormData().promiseHandler(fetch(_this.getUrl(endPoint, params), {
        method: 'POST',
        headers: _this.getHeaders(endPoint),
        body: formdata
      }));
    };

    this.remove = function (endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _this.promiseHandler(fetch(_this.getUrl(endPoint, params), {
        method: 'DELETE',
        headers: _this.getHeaders(endPoint)
      }));
    };

    this.headers = headers;
  }

  /**
   * @returns {Headers}
   */


  _createClass(ApiFetch, [{
    key: 'getHeaders',
    value: function getHeaders() {
      return new Headers(_extends({
        'Content-Type': 'application/json',
        'X-BetaSeries-Version': '2.4',
        'X-BetaSeries-Key': _betaseries2.default.config.apiKey
      }, this.headers));
    }
  }]);

  return ApiFetch;
}();

exports.default = new ApiFetch();