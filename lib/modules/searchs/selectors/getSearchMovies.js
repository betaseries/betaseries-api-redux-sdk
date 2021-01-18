import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select movies from state
 *
 * @alias module:Searchs.getSearchMovies
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   movies: BetaSeries.getSelector('searchs', 'getSearchMovies')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  List of movies or empty array
 */
const getSearchMovies = createSelector(
  [commons.getSearchMovies],
  movies => movies
);

export default getSearchMovies;
