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
 * **Dispatch**: `FETCH_EPISODE_BY_CODE`
 *
 * @alias module:Shows.doFetchEpisodeByCode
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchEpisodeByCode')({ showId: 123, code: 'SO3E15' });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.showId]      Episode ID
 * @param {String}  [obj.code]        Episode code like `SO3E15`
 *
 * @returns {Promise}
 */
var doFetchEpisodeByCode = function doFetchEpisodeByCode(_ref) {
  var showId = _ref.showId,
      code = _ref.code;
  return function (dispatch) {
    return _ApiFetch2.default.get('episodes/search', { show_id: showId, number: code }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_EPISODE_BY_CODE,
        payload: {
          showId: showId,
          code: code,
          episode: response.episode
        }
      });
    });
  };
};

exports.default = doFetchEpisodeByCode;