import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve season subtitles of a show
 *
 * **Dispatch**: `FETCH_SEASON_SUBTITLES`
 *
 * @alias module:Subtitles.doFetchSeasonSubtitles
 * @category actions
 *
 * @example
 * BetaSeries.getAction('subtitles', 'doFetchSeasonSubtitles')({ showId: 123, season: 1 });
 *
 * @param {Object}  [obj]          Accept the following:
 * @param {Number}  [obj.showId]   Show ID
 * @param {Number}  [obj.season]   Season number (default: all)
 *
 * @returns {Promise}
 */
const doFetchSeasonSubtitles = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('subtitles/season', { id: showId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_SEASON_SUBTITLES,
        payload: {
          showId,
          ...props,
          subtitles: response.subtitles
        }
      }));

export default doFetchSeasonSubtitles;
