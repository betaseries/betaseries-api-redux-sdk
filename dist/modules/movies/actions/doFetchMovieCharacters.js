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
 * Retrieve characters of the movie
 *
 * **Dispatch**: `FETCH_MOVIE_CHARACTERS`
 *
 * @alias module:Movies.doFetchMovieCharacters
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchMovieCharacters')({ movieId: 591 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.movieId]   Movie ID
 *
 * @returns {Promise}
 */
var doFetchMovieCharacters = function doFetchMovieCharacters(_ref) {
  var movieId = _ref.movieId;
  return function (dispatch) {
    return _ApiFetch2.default.get('movies/characters', { id: movieId }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_MOVIE_CHARACTERS,
        payload: {
          movieId: movieId,
          characters: response.characters
        }
      });
    });
  };
};

exports.default = doFetchMovieCharacters;