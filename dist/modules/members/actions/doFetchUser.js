'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  summary: true
};

/**
 * Retrieve authenticated user infos
 *
 * **Dispatch**: `FETCH_USER`
 *
 * @alias module:Members.doFetchUser
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doFetchUser')();
 *
 * @param {Object}  [obj]          Accept the folling:
 * @param {Bool}    [obj.summary]  Display only the information (default `true`)
 * @param {String}  [obj.only]     Display only `movies` or `shows`
 *
 * @returns {Promise}
 */
var doFetchUser = function doFetchUser(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return function (dispatch) {
    return _ApiFetch2.default.get('members/infos', _extends({}, defaultProps, props)).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_USER,
        payload: _extends({}, props, {
          member: response.member
        })
      });
    });
  };
};

exports.default = doFetchUser;