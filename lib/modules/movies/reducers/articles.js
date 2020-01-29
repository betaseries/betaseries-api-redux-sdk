import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = {};

/**
 * List of the movie articles
 *
 * **Actions listened**:
 *
 *  * `FETCH_MOVIE_ARTICLES`
 *
 * @alias module:Movies.articles
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'articles').moviesArticles;
 *
 * // state value example
 * {
 *   '1243': [              // movie ID
 *     {
 *       id: 123543,        // article ID
 *       ...article       // article element
 *     },
 *     ...
 *   ]
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function movieArticlesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MOVIE_ARTICLES: {
      const movieId = action.payload.movieId;
      const articles = state[movieId] || [];

      if (action.payload.articles.length === 0) {
        return state;
      }

      return {
        ...state,
        [movieId]: _uniqBy([...articles, ...action.payload.articles], 'id')
      };
    }

    default:
      return state;
  }
}
