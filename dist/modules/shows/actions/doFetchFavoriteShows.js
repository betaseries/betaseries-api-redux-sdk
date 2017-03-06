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
 * Retrieve favorite shows of the member
 *
 * **Dispatch**: `FETCH_FAVORITE_SHOWS`
 *
 * @alias module:Shows.doFetchFavoriteShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchFavoriteShows')({ memberId: 1 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.memberId]  member ID
 *
 * @returns {Promise}
 */
var doFetchFavoriteShows = function doFetchFavoriteShows(_ref) {
  var memberId = _ref.memberId;
  return function (dispatch) {
    return _ApiFetch2.default.get('shows/favorites', { id: memberId }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_FAVORITE_SHOWS,
        payload: {
          memberId: memberId,
          shows: response.shows
        }
      });
    });
  };
};

exports.default = doFetchFavoriteShows;