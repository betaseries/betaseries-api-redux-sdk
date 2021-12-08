import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of home popular articles
 *
 * **Actions listened**:
 *
 *  * `FETCH_HOME_POPULAR_ARTICLES`
 *
 * @alias module:Home.articles
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('home', 'articles').homeArticles;
 *
 * // state example
 * [
 *   {
 *     id: 384144,    // article post
 *     ...post,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function articlesHomeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_HOME_POPULAR_ARTICLES:
      return _uniqBy(
        [...(state || []), ...(action.payload.articles || [])],
        'id'
      );

    default:
      return state;
  }
}
