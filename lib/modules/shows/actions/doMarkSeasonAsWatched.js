import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import arrayToID from '../../../utils/func/arrayToID';

/**
 * Mark entire season as watched
 *
 * **Dispatch**: `MARK_SEASON_AS_WATCHED`
 *
 * @alias module:Shows.doMarkSeasonAsWatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkSeasonAsWatched')({
 *   showId: 438,
 *   season: 2,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @param {Number}  [obj.season]      Number of season to mark as watched
 * @param {Number}  [obj.note]        (optional) Note for the season
 *
 * @returns {Promise}
 */
const doMarkSeasonAsWatched = (
  {
    showId,
    season,
    note
  }
) =>
  dispatch =>
    ApiFetch.post('seasons/watched', {
      id: showId,
      season,
      note
    }).then(response =>
      dispatch({
        type: constants.MARK_MANY_EPISODE_AS_WATCHED,
        payload: {
          showId,
          season,
          note,
          episodeIds: arrayToID(response.episodes),
          seen: true
        }
      }));

export default doMarkSeasonAsWatched;
