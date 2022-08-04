import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of the movie tags
 *
 * **Actions listened**:
 *
 *  * `FETCH_MOVIE_TAGS_LIST`
 *  * `POST_MOVIE_TAG`
 *  * `DELETE_MOVIE_TAG`
 *
 * @alias module:Moviess.tags
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('movies', 'tags').moviesTags;
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
export default function moviesTagsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.POST_MOVIE_TAG:
    case constants.DELETE_MOVIE_TAG:
    case constants.FETCH_MOVIE_TAGS_LIST: {
      return _uniqBy(action.payload.tags, 'tag');
    }

    default:
      return state;
  }
}
