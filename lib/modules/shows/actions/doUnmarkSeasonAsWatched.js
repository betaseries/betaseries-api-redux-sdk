import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import arrayToID from '../../../utils/func/arrayToID';

/**
 * Unmark entire season as watched
 *
 * **Dispatch**: `UNMARK_SEASON_AS_WATCHED`
 *
 * @alias module:Shows.doUnmarkSeasonAsWatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doUnmarkSeasonAsWatched')({
 *   showId: 438,
 *   season: 2,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @param {Number}  [obj.season]      Number of season to unmark as watched
 *
 * @returns {Promise}
 */
const doUnmarkSeasonAsWatched = (
  {
    showId,
    season
  }
) =>
  dispatch =>
    ApiFetch.remove('seasons/watched', {
      id: showId,
      season
    }).then(response =>
      dispatch({
        type: constants.UNMARK_MANY_EPISODE_AS_WATCHED,
        payload: {
          showId,
          season,
          episodeIds: arrayToID(response.episodes),
          seen: false
        }
      }));

export default doUnmarkSeasonAsWatched;
