import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = {};

/**
 * List of wordpress tag posts
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_POSTS_WITH_TAG`
 *
 * @alias module:Blog.tagPosts
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('blog', 'tagPosts').blogTagPosts;
 *
 * // state example
 *   {
 *     '384144': [{ ... }, { ... }],    // wordpress tag posts
 *     ...
 *   },
 *   ...,
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function tagPostsBlogReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_WP_POSTS_WITH_TAG:
      return {
        ...state,
        [action.payload.tagId]: _uniqBy(
          [
            ...(state[action.payload.tagId] || []),
            ...(action.payload.posts || [])
          ],
          'id'
        )
      };

    default:
      return state;
  }
}
