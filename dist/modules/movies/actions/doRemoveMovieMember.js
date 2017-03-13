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
    return _ApiFetch2.default.remove('movies/movie', { id: movieId }).then(function () {
      return dispatch({
        type: _constants2.default.REMOVE_MEMBER_MOVIE,
        payload: {
          memberId: getState().membersUser,
          movieId: movieId
        }
      });
    });
  };
};

exports.default = doRemoveMovieMember;