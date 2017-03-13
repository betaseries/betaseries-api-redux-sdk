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
 * Add note on movie
 *
 * **Dispatch**: `RATE_MOVIE`
 *
 * @alias module:Movies.doRateMovie
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doRateMovie')({
 *   movieId: 438,
 *   note: 4,
 * });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.movieId]   Movie ID
 * @param {Number}  [obj.note]      Note (from `1` to `5`)
 *
 * @returns {Promise}
 */
var doRateMovie = function doRateMovie(_ref) {
  var movieId = _ref.movieId,
      note = _ref.note;
  return function (dispatch) {
    return _ApiFetch2.default.post('movies/note', { id: movieId, note: note }).then(function (response) {
      return dispatch({
        type: _constants2.default.RATE_MOVIE,
        payload: {
          movieId: movieId,
          note: note,
          movie: response.movie
        }
      });
    });
  };
};

exports.default = doRateMovie;