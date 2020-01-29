import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve articles of the movie
 *
 * **Dispatch**: `FETCH_MOVIE_ARTICLES`
 *
 * @alias module:Movies.doFetchMovieArticles
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchMovieArticles')({ movieId: 591 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.movieId]   Movie ID
 *
 * @returns {Promise}
 */
const doFetchMovieArticles = ({ movieId }) =>
  dispatch =>
    ApiFetch.get('movies/articles', { id: movieId }).then(response =>
      dispatch({
        type: constants.FETCH_MOVIE_ARTICLES,
        payload: {
          movieId,
          articles: response.articles
        }
      }));

export default doFetchMovieArticles;
