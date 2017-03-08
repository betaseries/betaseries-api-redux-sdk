'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = showsSimilarReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

/**
 * List of similar shows
 *
 * **Actions listened**:
 *
 *  * `FETCH_SIMILAR_SHOWS`
 *
 * @alias module:Shows.similars
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'similars').showsSimilars;
 *
 * // state value example
 * {
 *   '1275': [           // show ID
 *     481, 2135, 23     // list of shows ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function showsSimilarReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_SIMILAR_SHOWS:
      return _extends({}, state, _defineProperty({}, action.payload.showId, action.payload.similars));

    default:
      return state;
  }
}