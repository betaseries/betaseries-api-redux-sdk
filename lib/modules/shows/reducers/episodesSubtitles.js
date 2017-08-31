import constants from '../constants';

const initialState = {};

/**
 * List of the episodes subtitles
 *
 * **Actions listened**:
 *
 *  * `FETCH_EPISODE_SUBTITLES`
 *
 * @alias module:Shows.episodesSubtitles
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'episodesSubtitles').showsEpisodesSubtitles;
 *
 * // state example
 * {
 *   '1275': [              // episode ID
 *     {
 *       id: 123543,        // subtitle ID
 *       ...subtitle        // subtitle element
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
export default function showsEpisodesSubtitlesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.FETCH_EPISODE_SUBTITLES:
      return {
        ...state,
        [action.payload.episodeId]: action.payload.subtitles
      };

    default:
      return state;
  }
}
