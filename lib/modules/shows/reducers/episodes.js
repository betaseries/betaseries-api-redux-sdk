import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of the show episodes group by season and episode number
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_EPISODES`
 *  * `FETCH_MANY_EPISODES`
 *  * `FETCH_LATEST_EPISODE`
 *  * `FETCH_EPISODE_BY_CODE`
 *  * `FETCH_EPISODE`
 *
 * @alias module:Shows.episodes
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'episodes');
 *
 * // state example
 * {
 *   '3215': {            // episode ID
 *     id: 3215,          // episode ID
 *     ...episode,        // episode element
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showEpisodesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_EPISODES:
    case constants.FETCH_MANY_EPISODES:
      return {
        ...state,
        ...arrayToHash(action.payload.episodes),
      };

    case constants.FETCH_LATEST_EPISODE:
    case constants.FETCH_EPISODE_BY_CODE:
    case constants.FETCH_EPISODE:
      return {
        ...state,
        ...arrayToHash([action.payload.episode]),
      };

    default:
      return state;
  }
}
