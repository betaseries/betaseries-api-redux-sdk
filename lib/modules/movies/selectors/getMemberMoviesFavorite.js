import _reduce from 'lodash/reduce';
import { createSelector } from 'reselect';
import BetaSeries from '../../../betaseries';
import * as commons from './commons';
/**
 * Select favorite movies by member from state
 *
 * @alias module:Movies.getMemberMoviesFavorite
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('movies', 'getMemberMoviesFavorite')(state, {
 *     memberId: props.memberId
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.memberId]    Member ID
 *
 * @returns {Array}                   List of movies element or `undefined`
 */
const getMemberMoviesFavorite = createSelector(
  [commons.getMovies, commons.getMemberMovies, commons.getMemberId],
  (movies, membersMovies, memberId) => {
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

        if (movie[getUserScope()].favorited) {
          sum.push(movie);
        }

        return sum;
      },
      []
    );

    return filteredMovies.length === 0 ? undefined : filteredMovies;
  }
);

export default getMemberMoviesFavorite;
