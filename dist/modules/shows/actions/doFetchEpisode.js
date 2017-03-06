'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve episode
 *
 * **Dispatch**: `FETCH_EPISODE`
 *
 * @alias module:Shows.doFetchEpisode
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchEpisode')({ episodeId: 123 });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.episodeId]   Episode ID
 *
 * @returns {Promise}
 */
var doFetchEpisode = function doFetchEpisode(_ref) {
  var episodeId = _ref.episodeId;
  return function (dispatch) {
    return _ApiFetch2.default.get('episodes/display', { id: episodeId }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_EPISODE,
        payload: {
          episodeId: episodeId,
          episode: response.episode
        }
      });
    });
  };
};

exports.default = doFetchEpisode;