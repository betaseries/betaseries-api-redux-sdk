import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of wordpress featured posts
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_FEATURED_POSTS`
 *
 * @alias module:Blog.featuredPosts
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('blog', 'featuredPosts').blogFeaturedPosts;
 *
 * // state example
 * [
 *   {
 *     id: 384144,    // wordpress featured post
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
export default function featuredPostsBlogReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_WP_FEATURED_POSTS:
      return _uniqBy(
        [...(state || []), ...(action.payload.featuredPosts || [])],
        'id'
      );

    case constants.CLEAR_BLOG_POSTS:
      return initialState;

    default:
      return state;
  }
}
