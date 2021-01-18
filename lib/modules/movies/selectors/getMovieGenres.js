import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select genres from state
 *
 * @alias module:Movies.getMovieGenres
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   movie: BetaSeries.getSelector('movies', 'getMovieGenres')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 *
 * @returns {Array}                   List of genres or `undefined`
 */
const getMovieGenres = createSelector(
  [commons.getGenres],
  genres => genres || []
);

export default getMovieGenres;
