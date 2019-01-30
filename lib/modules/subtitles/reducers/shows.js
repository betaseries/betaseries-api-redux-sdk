import constants from '../constants';

const initialState = {};

/**
 * List of the season subtitles for a show
 *
 * **Actions listened**:
 *
 *  * `FETCH_SEASON_SUBTITLES`
 *
 * @alias module:Subtitles.shows
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('subtitles', 'shows').subtitlesShows;
 *
 * // state example
 * {
 *   '1275': {              // Show ID
 *     '3': [{              // Season number
 *       id: 123543,        // subtitle ID
 *       ...subtitle        // subtitle element
 *     }],
 *     ...
 *   }
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function subtitlesEpisodesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SEASON_SUBTITLES:
    case constants.FETCH_SHOW_SUBTITLES: {
      let season = action.payload.season;
      if (!season) {
        season = 'all';
      }

      const showId = action.payload.showId;

      return {
        ...state,
        [showId]: {
          ...state[showId],
          [season]: action.payload.subtitles
        }
      };
    }

    default:
      return state;
  }
}
