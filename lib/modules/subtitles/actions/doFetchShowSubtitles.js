import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve show subtitles
 *
 * **Dispatch**: `FETCH_SHOW_SUBTITLES`
 *
 * @alias module:Subtitles.doFetchShowSubtitles
 * @category actions
 *
 * @example
 * BetaSeries.getAction('subtitles', 'doFetchShowSubtitles')({ showId: 123 });
 *
 * @param {Object}  [obj]          Accept the following:
 * @param {Number}  [obj.showId]   Show ID
 *
 * @returns {Promise}
 */
const doFetchShowSubtitles = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('subtitles/show', { id: showId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_SUBTITLES,
        payload: {
          showId,
          ...props,
          subtitles: response.subtitles
        }
      }));

export default doFetchShowSubtitles;
