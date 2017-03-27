import { createSelector } from 'reselect';
import _reduce from 'lodash/reduce';
import * as commons from './commons';
import BetaSeries from '../../../betaseries';
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
 * @param {Number}  [obj.memberId]    Member ID
 * @param {Number}  [obj.state]       State of movie
 *   (`0` = to see, `1` = seen, `2` = doesn't want to see (`null` by default))
 *
 * @returns {Array}                   List of movies element or `undefined`
 */
const getMemberMovies = createSelector(
  [
    commons.getMovies,
    commons.getMemberMovies,
    commons.getMemberId,
    commons.getMovieState
  ],
  (movies, membersMovies, memberId, state) => {
    const movieIds = !Object.prototype.hasOwnProperty.call(
      membersMovies,
      memberId
    )
      ? null
      : membersMovies[memberId];

    if (!movieIds) {
      return undefined;
    }

    /**
     * Returns great user scope
     */
    function getUserScope() {
      return memberId === BetaSeries.user.userId ? 'auth_user' : 'user';
    }

    const filteredMovies = _reduce(
      movieIds,
      (sum, movieId) => {
        const movie = movies[movieId];

        if (state === null || state === movie[getUserScope()].status) {
          sum.push(movie);
        }

        return sum;
      },
      []
    );

    return filteredMovies.length === 0 ? undefined : filteredMovies;
  }
);

export default getMemberMovies;
