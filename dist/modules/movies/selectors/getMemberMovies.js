'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

var _betaseries = require('../../../betaseries');

var _betaseries2 = _interopRequireDefault(_betaseries);

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
    return undefined;
  }

  /**
   * Returns great user scope
   */
  function getUserScope() {
    return memberId === _betaseries2.default.user.userId ? 'auth_user' : 'user';
  }

  var filteredMovies = (0, _reduce3.default)(movieIds, function (sum, movieId) {
    var movie = movies[movieId];

    if (state === null || state === movie[getUserScope()].status) {
      sum.push(movie);
    }

    return sum;
  }, []);

  return filteredMovies.length === 0 ? undefined : filteredMovies;
});

exports.default = getMemberMovies;