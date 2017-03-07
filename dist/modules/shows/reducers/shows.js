'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = showsReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _arrayToHash = require('../../../utils/func/arrayToHash');

var _arrayToHash2 = _interopRequireDefault(_arrayToHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/**
 * List of shows
 *
 * **Actions listened**:
 *
 *  * `FETCH_FAVORITE_SHOWS`
 *  * `FETCH_MANY_SHOWS`
 *  * `FETCH_SHOW`
 *
 * @alias module:Shows.shows
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'shows').shows;
 *
 * // state example
 * {
 *   '1275': {      // show ID
 *     id: 1275,    // show element
 *     ...show,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function showsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_FAVORITE_SHOWS:
    case _constants2.default.FETCH_MANY_SHOWS:
      return _extends({}, state, (0, _arrayToHash2.default)(action.payload.shows));

    case _constants2.default.FETCH_SHOW:
      return _extends({}, state, (0, _arrayToHash2.default)([action.payload.show]));

    default:
      return state;
  }
}