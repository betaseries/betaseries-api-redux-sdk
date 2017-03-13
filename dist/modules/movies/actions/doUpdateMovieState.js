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
 * **Dispatch**: `UPDATE_MOVIE_STATE`
 *
 * @alias module:Movies.doUpdateMovieState
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doUpdateMovieState')({
 *   movieId: 438,
 *   state: 2,
 * });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.movieId]   Movie ID
 * @param {Number}  [obj.state]     State of movie
 *   (`0` = to see, `1` = seen, `2` = doesn't want to see
 * @returns {Promise}
 */
var doUpdateMovieState = function doUpdateMovieState(_ref) {
  var movieId = _ref.movieId,
      state = _ref.state;
  return function (dispatch) {
    return _ApiFetch2.default.post('movies/movie', { id: movieId, state: state }).then(function (response) {
      return dispatch({
        type: _constants2.default.UPDATE_MOVIE_STATE,
        payload: {
          movieId: movieId,
          state: state,
          movie: response.movie
        }
      });
    });
  };
};

exports.default = doUpdateMovieState;