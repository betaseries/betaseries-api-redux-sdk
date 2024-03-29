import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of the show tags
 *
 * **Actions listened**:
 *
 *  * `FETCH_TAGS_LIST`
 *  * `POST_SHOW_TAG`
 *  * `DELETE_SHOW_TAG`
 *
 * @alias module:Shows.tags
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'tags').showsTags;
 *
 * // state example
 * [              // list of tags
 *   {
 *     ...tag           // tag element
 *   },
 *   ...
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsTagsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.POST_SHOW_TAG:
    case constants.DELETE_SHOW_TAG:
    case constants.FETCH_TAGS_LIST: {
      return _uniqBy(action.payload.tags, 'tag');
    }

    default:
      return state;
  }
}
