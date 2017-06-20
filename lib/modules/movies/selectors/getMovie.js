import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select movie by ID from state
 *
 * @alias module:Movies.getMovie
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('movies', 'getMovie')(state, {
 *     movieId: props.movieId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.movieId]     Movie ID
 *
 * @returns {Array}                   Movie element or `undefined`
 */
const getMovie = createSelector(
  [commons.getMovies, commons.getMovieId],
  (movies, movieId) =>
    !Object.prototype.hasOwnProperty.call(movies, movieId)
      ? undefined
      : movies[movieId]
);

export default getMovie;
