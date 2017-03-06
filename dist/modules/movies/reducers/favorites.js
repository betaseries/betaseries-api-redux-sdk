'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = movieFavoriteReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _arrayToID = require('../../../utils/func/arrayToID');

var _arrayToID2 = _interopRequireDefault(_arrayToID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

/**
 * List the favorite movies of the member
 *
 * **Actions listened**:
 *
 *  * `FETCH_FAVORITE_MOVIES`
 *
 * @alias module:Movies.favorites
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'favorites');
 *
 * // state value example
 * {
 *   '12': [               // member ID
 *     1234, 213, 2343,    // list of movies ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function movieFavoriteReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_FAVORITE_MOVIES:
      return _extends({}, state, _defineProperty({}, action.payload.memberId, (0, _arrayToID2.default)(action.payload.movies)));

    default:
      return state;
  }
}