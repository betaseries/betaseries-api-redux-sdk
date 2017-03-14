'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _betaseries = require('../../../betaseries');

var _betaseries2 = _interopRequireDefault(_betaseries);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve movie
 *
 * **Dispatch**: `REMOVE_MEMBER_MOVIE`
 *
 * @alias module:Movies.doRemoveMovieMember
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doRemoveMovieMember')({ movieId: 438 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.movieId]   Movie ID
 *
 * @returns {Promise}
 */
var doRemoveMovieMember = function doRemoveMovieMember(_ref) {
  var movieId = _ref.movieId;
  return function (dispatch, getState) {
    var oldMovie = getState().movies[movieId];

    dispatch({
      type: _constants2.default.REMOVE_MEMBER_MOVIE,
      payload: {
        memberId: _betaseries2.default.user.userId,
        movieId: movieId
      }
    });

    return _ApiFetch2.default.remove('movies/movie', { id: movieId }).catch(function () {
      return dispatch({
        type: _constants2.default.FETCH_MEMBER_MOVIES,
        payload: {
          memberId: _betaseries2.default.user.userId,
          movies: [oldMovie]
        }
      });
    });
  };
};

exports.default = doRemoveMovieMember;