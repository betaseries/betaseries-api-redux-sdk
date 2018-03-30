import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve videos of the show
 *
 * **Dispatch**: `FETCH_SHOW_VIDEOS`
 *
 * @alias module:Shows.doFetchShowVideos
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowVideos')({ showId: 1275 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.showId]    Show ID
 *
 * @returns {Promise}
 */
const doFetchShowVideos = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('shows/videos', { id: showId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_VIDEOS,
        payload: {
          showId,
          ...props,
          videos: response.videos || []
        }
      }));

export default doFetchShowVideos;
