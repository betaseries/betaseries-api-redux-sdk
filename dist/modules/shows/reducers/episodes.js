'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = showEpisodesReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _arrayToHash = require('../../../utils/func/arrayToHash');

var _arrayToHash2 = _interopRequireDefault(_arrayToHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/**
 * List of the show episodes group by season and episode number
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_EPISODES`
 *  * `FETCH_MANY_EPISODES`
 *  * `FETCH_LATEST_EPISODE`
 *  * `FETCH_EPISODE_BY_CODE`
 *  * `FETCH_EPISODE`
 *
 * @alias module:Shows.episodes
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'episodes').showsEpisodes;
 *
 * // state example
 * {
 *   '3215': {            // episode ID
 *     id: 3215,          // episode ID
 *     ...episode,        // episode element
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function showEpisodesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_SHOW_EPISODES:
    case _constants2.default.FETCH_MANY_EPISODES:
      return _extends({}, state, (0, _arrayToHash2.default)(action.payload.episodes));

    case _constants2.default.FETCH_LATEST_EPISODE:
    case _constants2.default.FETCH_EPISODE_BY_CODE:
    case _constants2.default.FETCH_EPISODE:
      return _extends({}, state, (0, _arrayToHash2.default)([action.payload.episode]));

    default:
      return state;
  }
}