import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = {};

/**
 * List of wordpress related posts
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_RELATED_POSTS`
 *
 * @alias module:Blog.relatedPosts
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('blog', 'relatedPosts').blogRelatedPosts;
 *
 * // state example
 *   {
 *     '384144': [{ ... }, { ... }],    // wordpress related posts
 *     ...
 *   },
 *   ...,
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function relatedPostsBlogReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_WP_RELATED_POSTS:
      return {
        ...state,
        [action.payload.parentId]: _uniqBy(
          [
            ...(state[action.payload.parentId] || []),
            ...(action.payload.relatedPosts || [])
          ],
          'id'
        )
      };

    default:
      return state;
  }
}
