import constants from '../constants';

const initialState = {};

/**
 * List of the show videos
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_VIDEOS`
 *
 * @alias module:Shows.videos
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'videos').showsVideos;
 *
 * // state example
 * {
 *   '1275': [              // show ID
 *     {
 *       id: 123543,        // video ID
 *       ...video       // video element
 *     },
 *     ...
 *   ]
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsCharactersReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_VIDEOS:
      return {
        ...state,
        [action.payload.showId]: action.payload.videos
      };

    default:
      return state;
  }
}
