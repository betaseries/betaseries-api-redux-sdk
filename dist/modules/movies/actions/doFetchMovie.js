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
 * Retrieve movie
 *
 * **Dispatch**: `FETCH_MOVIE`
 *
 * @alias module:Movies.doFetchMovie
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchMovie')({ movieId: 438 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.movieId]   Movie ID
 *
 * @returns {Promise}
 */
var doFetchMovie = function doFetchMovie(_ref) {
  var movieId = _ref.movieId;
  return function (dispatch) {
    return _ApiFetch2.default.get('movies/movie', { id: movieId }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_MOVIE,
        payload: {
          movieId: movieId,
          movie: response.movie
        }
      });
    });
  };
};

exports.default = doFetchMovie;