import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = {};

/**
 * List of the show articles
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_ARTICLES`
 *
 * @alias module:Shows.articles
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'articles').showsArticles;
 *
 * // state example
 * {
 *   '1275': [              // show ID
 *     {
 *       id: 123543,        // article ID
 *       ...article           // article element
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
export default function showsArticlesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_ARTICLES: {
      const showId = action.payload.showId;
      const articles = state[showId] || [];

      if (action.payload.articles.length === 0) {
        return state;
      }

      return {
        ...state,
        [showId]: _uniqBy([...articles, ...action.payload.articles], 'id')
      };
    }

    default:
      return state;
  }
}
