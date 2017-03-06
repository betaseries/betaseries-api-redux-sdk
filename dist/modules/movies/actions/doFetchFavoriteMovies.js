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
 * Retrieve favorite movies of the member
 *
 * **Dispatch**: `FETCH_FAVORITE_MOVIES`
 *
 * @alias module:Movies.doFetchFavoriteMovies
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchFavoriteMovies')({ memberId: 1 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.memberId]  member ID
 *
 * @returns {Promise}
 */
var doFetchFavoriteMovies = function doFetchFavoriteMovies(_ref) {
  var memberId = _ref.memberId;
  return function (dispatch) {
    return _ApiFetch2.default.get('movies/favorites', { id: memberId }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_FAVORITE_MOVIES,
        payload: {
          memberId: memberId,
          movies: response.movies
        }
      });
    });
  };
};

exports.default = doFetchFavoriteMovies;