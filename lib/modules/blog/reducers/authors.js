import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of wordpress authors
 *
 * **Actions listened**:
 *
 *  * `FETCH_WP_AUTHORS`
 *
 * @alias module:Blog.authors
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('blog', 'authors').blogAuthors;
 *
 * // state example
 * [
 *   {
 *     id: 384144,    // wordpress author
 *     ...author,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function authorsBlogReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_WP_AUTHORS:
      return _uniqBy(
        [...(state || []), ...(action.payload.authors || [])],
        'id'
      );

    default:
      return state;
  }
}
