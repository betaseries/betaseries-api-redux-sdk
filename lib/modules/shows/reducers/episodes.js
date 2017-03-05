import constants from '../constants';

const initialState = {};

/**
 * arrayToSeasonEpisodeId func
 */
const arrayToSeasonEpisodeId = episodes => episodes.reduce((sum, episode) => {
  const season = !Object.prototype.hasOwnProperty.call(sum, episode.season) ? {} : (
    sum[episode.season]
  );

  return {
    ...sum,
    [episode.season]: {
      ...season,
      [episode.episode]: episode,
    },
  };
}, {});

/**
 * List of the show episodes group by season and episode number
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_EPISODES`
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
 *   '1275': {           // show ID
 *     '1': {            // season number
 *       '1': {          // episode number
 *         id: 1,        // episode element
 *         ...episode,
 *       },
 *     },
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
      return {
        ...state,
        [action.payload.showId]: arrayToSeasonEpisodeId(action.payload.episodes),
      };

    default:
      return state;
  }
}
