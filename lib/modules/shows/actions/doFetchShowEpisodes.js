import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve episodes of the show
 *
 * **Dispatch**: `FETCH_SHOW_EPISODES`
 *
 * @alias module:Shows.doFetchShowEpisodes
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowEpisodes')({ showId: 1275, season: 1 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.showId]    Show ID
 * @param {Number}  [obj.season]    Season number (optional)
 * @param {Number}  [obj.episode]   Episode Number (optional)
 * @param {Bool}    [obj.subtitles] Displays subtitles and information (optional)
 *
 * @returns {Promise}
 */
const doFetchShowEpisodes = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('shows/episodes', { id: showId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_EPISODES,
        payload: {
          ...props,
          showId,
          episodes: response.episodes
        }
      }));

export default doFetchShowEpisodes;
