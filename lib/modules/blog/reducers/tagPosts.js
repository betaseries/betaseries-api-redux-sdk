import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = {};

/**
 * List of wordpress tag posts
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_POSTS_WITH_TAG`
 *  * `CLEAR_BLOG_TAG_POSTS`
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
 *     'philarmonie-paris': [{ ... }, { ... }],    // wordpress tag posts
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
        [action.payload.tagSlug]: _uniqBy(
          [
            ...(state[action.payload.tagSlug] || []),
            ...(action.payload.posts || [])
          ],
          'id'
        )
      };

    case constants.CLEAR_BLOG_TAG_POSTS:
      return {
        ...state,
        [action.payload.tagSlug]: []
      };

    default:
      return state;
  }
}
