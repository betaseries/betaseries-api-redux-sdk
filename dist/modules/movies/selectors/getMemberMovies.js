'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Select movies by member from state
 *
 * @alias module:Movies.getMemberMovies
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getMemberMovies')(state, {
 *     memberId: props.memberId,
 *     state: 0,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.memberId]    Show ID
 * @param {Number}  [obj.state]       State of movie
 *   (`0` = to see, `1` = seen, `2` = doesn't want to see (`null` by default))
 *
 * @returns {Array}                   List of movies element or `null`
 */
var getMemberMovies = (0, _reselect.createSelector)([commons.getMovies, commons.getMemberMovies, commons.getMemberId, commons.getMovieState], function (movies, membersMovies, memberId, state) {
  var movieIds = !Object.prototype.hasOwnProperty.call(membersMovies, memberId) ? null : membersMovies[memberId];

  if (!movieIds) {
    return null;
  }

  var filteredMovies = (0, _filter3.default)(movies, function (movie) {
    return movieIds.indexOf(movie.id) !== -1 && (state === null ? true : state === movie.user.status);
  });

  return filteredMovies.length === 0 ? null : filteredMovies;
}); // memberId, state || null

exports.default = getMemberMovies;