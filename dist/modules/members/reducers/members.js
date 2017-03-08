'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = moviesReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

/**
 * List of members
 *
 * **Actions listened**:
 *
 *  * `FETCH_USER`
 *  * `FETCH_MEMBER`
 *
 * @alias module:Members.members
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('members', 'members').members;
 *
 * // state value example
 * {
 *   '12': {      // member ID
 *     id: 12,    // member element
 *     ...member,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function moviesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_USER:
    case _constants2.default.FETCH_MEMBER:
      return _extends({}, state, _defineProperty({}, action.payload.member.id, action.payload.member));

    default:
      return state;
  }
}