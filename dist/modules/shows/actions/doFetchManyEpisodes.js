'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _difference2 = require('lodash/difference');

var _difference3 = _interopRequireDefault(_difference2);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve many episodes
 *
 * **Dispatch**: `FETCH_MANY_EPISODES`
 *
 * @alias module:Shows.doFetchManyEpisodes
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchManyEpisodes')({ episodeIds: [ 1, 2, 3 ] });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Array}   [obj.episodeIds]  List of episodes ID
 *
 * @returns {Promise}
 */
var doFetchManyEpisodes = function doFetchManyEpisodes(_ref) {
  var episodeIds = _ref.episodeIds;
  return function (dispatch, getState) {
    var state = getState();

    // fetch episodes only if does not exist on reducers
    var cleanEpisodeIds = !Object.prototype.hasOwnProperty.call(state, 'episodes') ? episodeIds : (0, _difference3.default)(episodeIds, Object.keys(state.episodes).map(function (episode) {
      return parseInt(episode, 10);
    }));

    if (cleanEpisodeIds.length === 0) {
      return Promise.resolve();
    }

    return _ApiFetch2.default.get('episodes/display', { id: cleanEpisodeIds.join(',') }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_MANY_EPISODES,
        payload: {
          episodeIds: cleanEpisodeIds,
          episodes: response.episodes
        }
      });
    });
  };
};

exports.default = doFetchManyEpisodes;