'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = episodeCommentsReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _arrayToID = require('../../../utils/func/arrayToID');

var _arrayToID2 = _interopRequireDefault(_arrayToID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

/**
 * List the comments of the episode
 *
 * **Actions listened**:
 *
 *  * `FETCH_EPISODE_COMMENTS`
 *
 * @alias module:Comments.episodes
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'episodes');
 *
 * // state value example
 * {
 *   '12': [               // episode ID
 *     1234, 213, 2343,    // list of comments ID
 *   ],
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function episodeCommentsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_EPISODE_COMMENTS:
      return _extends({}, state, _defineProperty({}, action.payload.episodeId, (0, _arrayToID2.default)(action.payload.comments)));

    default:
      return state;
  }
}