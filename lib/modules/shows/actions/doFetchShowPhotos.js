import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve photos of the show
 *
 * **Dispatch**: `FETCH_SHOW_PHOTOS`
 *
 * @alias module:Shows.doFetchShowPhotos
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowPhotos')({ showId: 1275 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.showId]    Show ID
 *
 * @returns {Promise}
 */
const doFetchShowPhotos = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('shows/pictures', { id: showId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_PHOTOS,
        payload: {
          showId,
          ...props,
          photos: response.pictures || []
        }
      }));

export default doFetchShowPhotos;
