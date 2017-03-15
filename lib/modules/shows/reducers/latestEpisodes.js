import constants from '../constants';

const initialState = {};

/**
 * List the latest episode of show
 *
 * **Actions listened**:
 *
 *  * `FETCH_LATEST_EPISODE`
 *
 * @alias module:Shows.latestEpisodes
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'latestEpisodes').showsLatestEpisodes;
 *
 * // state example
 * {
 *   '12': 568786372645,  // Show ID : Episode ID
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsLatestEpisodeReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.FETCH_LATEST_EPISODE:
      return {
        ...state,
        [action.payload.showId]: action.payload.episode.id
      };

    default:
      return state;
  }
}
