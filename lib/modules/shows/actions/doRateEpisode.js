import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add note on episode
 *
 * **Dispatch**: `RATE_EPISODE`
 *
 * @alias module:Shows.doRateEpisode
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doRateEpisode')({
 *   episodeId: 438,
 *   note: 4,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 * @param {Number}  [obj.note]        Note (from `1` to `5`)
 *
 * @returns {Promise}
 */
const doRateEpisode = ({ episodeId, note }) =>
  dispatch =>
    ApiFetch.post('episodes/note', {}, { id: episodeId, note }).then(response =>
      dispatch({
        type: constants.RATE_EPISODE,
        payload: {
          episodeId,
          note,
          episodes: (response || {}).episodes || null,
          episode: (response || {}).episode || null
        }
      }));

export default doRateEpisode;
