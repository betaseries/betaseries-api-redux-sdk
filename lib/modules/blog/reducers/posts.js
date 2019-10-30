import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of wordpress posts
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_POSTS`
 *
 * @alias module:Blog.posts
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('blog', 'posts').blogPosts;
 *
 * // state example
 * [
 *   {
 *     id: 384144,    // wordpress post
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
export default function postsBlogReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_WP_POSTS:
      return _uniqBy([...(state || []), ...(action.payload.posts || [])], 'id');

    default:
      return state;
  }
}
