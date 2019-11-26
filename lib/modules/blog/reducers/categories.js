import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of wordpress categories
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_CATEGORIES`
 *
 * @alias module:Blog.categories
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('blog', 'categories').blogCategories;
 *
 * // state example
 * [
 *   {
 *     id: 53,    // wordpress category
 *     ...category,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function categoriesBlogReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_WP_CATEGORIES:
      return _uniqBy(
        [...(state || []), ...(action.payload.categories || [])],
        'id'
      );

    default:
      return state;
  }
}
