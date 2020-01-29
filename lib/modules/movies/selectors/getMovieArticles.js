import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select movie articles by ID from state
 *
 * @alias module:Movies.getMovieArticles
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('movies', 'getMovieArticles')(state, {
 *     movieId: props.movieId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.movieId]     Movie ID
 *
 * @returns {Array}                   Movie articles or `undefined`
 */
const getMovieArticles = createSelector(
  [commons.getArticles, commons.getMovieId],
  (articles, movieId) =>
    !Object.prototype.hasOwnProperty.call(articles, movieId)
      ? undefined
      : articles[movieId]
);

export default getMovieArticles;
