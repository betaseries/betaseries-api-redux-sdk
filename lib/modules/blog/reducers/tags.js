import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of wordpress tags
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_CATEGORIES`
 *
 * @alias module:Blog.tags
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('blog', 'tags').blogTags;
 *
 * // state example
 * [
 *   {
 *     id: 53,    // wordpress tag
 *     ...tag,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function tagsBlogReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_WP_TAGS:
      return _uniqBy([...(state || []), ...(action.payload.tags || [])], 'id');

    default:
      return state;
  }
}
