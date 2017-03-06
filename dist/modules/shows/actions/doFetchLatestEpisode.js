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
 * **Dispatch**: `FETCH_LATEST_EPISODE`
 *
 * @alias module:Shows.doFetchLatestEpisode
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchLatestEpisode')({ showId: 481 });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.showId]      Show ID
 *
 * @returns {Promise}
 */
var doFetchLatestEpisode = function doFetchLatestEpisode(_ref) {
  var showId = _ref.showId;
  return function (dispatch) {
    return _ApiFetch2.default.get('episodes/latest', { id: showId }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_LATEST_EPISODE,
        payload: {
          showId: showId,
          episode: response.episode
        }
      });
    });
  };
};

exports.default = doFetchLatestEpisode;