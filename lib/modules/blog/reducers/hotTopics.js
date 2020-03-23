import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of wordpress hotTopics
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_HOT_TOPICS`
 *
 * @alias module:Blog.hotTopics
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('blog', 'hotTopics').blogHotTopics;
 *
 * // state example
 * [
 *   {
 *     ID: 53,    // hot topic
 *     ...hot topic,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function hotTopicsBlogReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_WP_HOT_TOPICS:
      return _uniqBy([...(state || []), ...(action.payload.items || [])], 'ID');

    default:
      return state;
  }
}
