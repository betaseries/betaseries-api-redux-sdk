import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = {};

/**
 * List of wordpress category posts
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_POSTS_WITH_CATEGORY`
 *
 * @alias module:Blog.categoryPosts
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('blog', 'categoryPosts').blogCategoryPosts;
 *
 * // state example
 *   {
 *     '384144': [{ ... }, { ... }],    // wordpress category posts
 *     ...
 *   },
 *   ...,
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function categoryPostsBlogReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_WP_POSTS_WITH_CATEGORY:
      return {
        ...state,
        [action.payload.categoryId]: _uniqBy(
          [
            ...(state[action.payload.categoryId] || []),
            ...(action.payload.posts || [])
          ],
          'id'
        )
      };

    default:
      return state;
  }
}
